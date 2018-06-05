import { Invite } from '../models/Invite';
import { persons } from './persons';

export const invites: Invite[] = [
  {
    from: persons[0],
    date: '06/06/18',
    time: '12:30',
    description: 'This is the description',
    location: 'Coppito L\'aquila',
    status: 'pending',
  },  {
    from: persons[0],
    date: '06/06/18',
    time: '12:30',
    description: 'This is the description',
    location: 'Coppito L\'aquila',
    status: 'rejected',
  },  {
    from: persons[0],
    date: '10/06/18',
    time: '12:30',
    description: 'This is the description',
    location: 'Coppito L\'aquila',
    status: 'accepted',
  },
];
