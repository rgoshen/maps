import { randLatitude, randLongitude } from '@ngneat/falso';

const coord = { lat: randLatitude(), lng: randLongitude() };

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(divId) as HTMLElement,
      {
        zoom: 1,
        center: coord,
      }
    );
  }
}
