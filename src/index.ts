import {
  randLatitude,
  randLongitude,
  randFullName,
  randCompanyName,
  randCatchPhrase,
} from '@ngneat/falso';
// import { Company } from './Company';
// import { User } from './User';

// const user = new User(randFullName(), randLatitude(), randLongitude());
// const company = new Company(
//   randCompanyName(),
//   randCatchPhrase(),
//   randLatitude(),
//   randLongitude()
// );
// console.log(user);
// console.log(company);

// Initialize and add the map
function initMap(): void {
  // Randomly generated coord
  const coord = { lat: randLatitude(), lng: randLongitude() };

  const mapDiv = document.getElementById('map');

  // The map, centered at coord
  const map = new google.maps.Map(mapDiv as HTMLElement, {
    zoom: 1,
    center: coord,
  });

  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: coord,
    map: map,
  });
  console.log(coord);
}

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
