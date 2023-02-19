// Instructions to every other class
// on how they can be an argument to 'addMarker'

// best solution
interface MapMarker {
  location: {
    lat: number;
    lng: number;
  };
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string, lat: number, lng: number) {
    this.googleMap = new google.maps.Map(
      document.getElementById(divId) as HTMLElement,
      {
        zoom: 1,
        center: { lat, lng },
      }
    );
  }

  // best code by adding interface type MapMarker
  addMarker(mapMarker: MapMarker): void {
    new google.maps.Marker({
      position: {
        lat: mapMarker.location.lat,
        lng: mapMarker.location.lng,
      },
      map: this.googleMap,
    });
  }

  // better code
  // addMarker(mapMarker: User | Company): void {
  //   new google.maps.Marker({
  //     position: {
  //       lat: mapMarker.location.lat,
  //       lng: mapMarker.location.lng,
  //     },
  //     map: this.googleMap,
  //   });
  // }

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
