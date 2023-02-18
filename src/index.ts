import {
  randLatitude,
  randLongitude,
  randFullName,
  randCompanyName,
  randCatchPhrase,
} from '@ngneat/falso';
import { Company } from './Company';
import { User } from './User';
import { CustomMap } from './CustomMap';

const user = new User(randFullName(), randLatitude(), randLongitude());
// const company = new Company(
//   randCompanyName(),
//   randCatchPhrase(),
//   randLatitude(),
//   randLongitude()
// );

// Initialize and add the map
function initMap(): void {
  const customMap = new CustomMap('map', 0, 0);
  customMap.addUserMarker(user);
}

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
