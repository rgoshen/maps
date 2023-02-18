import { randLatitude, randLongitude, randFullName } from '@ngneat/falso';

class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = randFullName();
    this.location = {
      lat: randLatitude(),
      lng: randLongitude(),
    };
  }
}
