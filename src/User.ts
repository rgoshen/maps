import { MapMarker } from './CustomMap';

export class User implements MapMarker {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor(name: string, lat: number, lng: number) {
    this.name = name;
    this.location = {
      lat,
      lng,
    };
  }

  markerContent(): string {
    return `
    <div>
      <h1>User Name: ${this.name}</h1>
    </div>
    `;
  }
}
