import {
  randLatitude,
  randLongitude,
  randFullName,
  randCompanyName,
  randCatchPhrase,
} from '@ngneat/falso';
import { Company } from './Company';
import { User } from './User';

const user = new User(randFullName(), randLatitude(), randLongitude());
const company = new Company(
  randCompanyName(),
  randCatchPhrase(),
  randLatitude(),
  randLongitude()
);
console.log(user, company);
