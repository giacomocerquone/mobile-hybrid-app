import { Invite } from '../models/Invite';
import { persons } from './persons';

export const invites: Invite[] = [
  {
    userId: 'Giovanni',
    userIdAvatar: '',
    userReceivedId: 'Io',
    date: '06/06/18',
    time: '12:30',
    description: 'This is the description',
    location: 'Coppito L\'aquila',
    status: 'pending',
  },  {
    userId: 'Emanuele',
    userIdAvatar: '',
    userReceivedId: 'Io',
    date: '06/06/18',
    time: '12:30',
    description: 'This is the description',
    location: 'Coppito L\'aquila',
    status: 'rejected',
  },  {
    userId: 'Francesco',
    userIdAvatar: '',
    userReceivedId: 'Io',
    date: '10/06/18',
    time: '12:30',
    description: 'This is the description',
    location: 'Coppito L\'aquila',
    status: 'accepted',
  },
];
