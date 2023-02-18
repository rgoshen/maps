export class Company {
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor(name: string, catchPhrase: string, lat: number, lng: number) {
    this.name = name;
    this.catchPhrase = catchPhrase;
    this.location = {
      lat,
      lng,
    };
  }
}
