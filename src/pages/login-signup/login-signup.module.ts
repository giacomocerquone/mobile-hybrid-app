import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginSignupPage } from './login-signup';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    LoginSignupPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginSignupPage),
    ComponentsModule,
  ],
})
export class LoginSignupPageModule {}
