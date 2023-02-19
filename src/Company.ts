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

  markerContent(): string {
    return `
    <div>
      <h1>Company Name: ${this.name}</h1>
      <h3>Catchphrase: ${this.catchPhrase}</h3>
    </div>
    `;
  }
}
