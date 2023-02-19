import { Company } from './Company';
import { User } from './User';

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

  // better code
  addMarker(mapMarker: User | Company): void {
    new google.maps.Marker({
      position: {
        lat: mapMarker.location.lat,
        lng: mapMarker.location.lng,
      },
      map: this.googleMap,
    });
  }

  // bad code
  // addUserMarker(user: User): void {
  //   new google.maps.Marker({
  //     position: {
  //       lat: user.location.lat,
  //       lng: user.location.lng,
  //     },
  //     map: this.googleMap,
  //   });
  // }

  //bad code
  // addCompanyMarker(company: Company): void {
  //   new google.maps.Marker({
  //     position: {
  //       lat: company.location.lat,
  //       lng: company.location.lng,
  //     },
  //     map: this.googleMap,
  //   });
  // }
}
