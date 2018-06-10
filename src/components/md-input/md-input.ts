import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'md-input',
  templateUrl: 'md-input.html',
})
export class MdInputComponent {

  @Input() data: string;
  @Input() label: string;
  @Input() type: string;
  @Output() dataChange = new EventEmitter();

  change(newValue) {
    this.data = newValue;
    this.dataChange.emit(newValue);
  }

  constructor() {}

}
