import { randLatitude, randLongitude, randFullName } from '@ngneat/falso';
import { User } from './User';

const user = new User(randFullName(), randLatitude(), randLongitude());
console.log(user);
