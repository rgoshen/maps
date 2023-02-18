import { randLatitude, randLongitude } from '@ngneat/falso';

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string, lat: number, lng: number) {
    this.googleMap = new google.maps.Map(
      document.getElementById(divId) as HTMLElement,
      {
        zoom: 2,
        center: { lat, lng },
      }
    );
  }
}
