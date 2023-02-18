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

  // bad code
  addUserMarker(user: User): void {
    new google.maps.Marker({
      position: {
        lat: user.location.lat,
        lng: user.location.lng,
      },
      map: this.googleMap,
    });
  }

  addCompanyMarker(company: Company): void {}
}
