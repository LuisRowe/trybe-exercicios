class TV {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo?: string;

  constructor( b: string, s: number, r: string, con: string[]) {
    this._brand = b;
    this._size = s;
    this._resolution = r;
    this._connections = con;
  }

  turnOn():void {
    console.log(this);
  }

  get connectedTo(): string | undefined {
    return this._connectedTo;
  }

  set connectedTo(connection:string | undefined) {
    if (!connection || this._connections.includes(connection)) {
      this._connectedTo = connection;
      console.log(`A TV está conectada através de ${this._connectedTo}`);
      
    } else {
      console.log(`Desculpe, a conexão "${connection}" não existe`);
    }
  }
}

const tv = new TV('LG', 27, '1080', ['HDMI', 'AV'])

tv.turnOn();

tv.connectedTo = "HDMI";
tv.connectedTo = "WI-FI";
tv.connectedTo = "AV";

console.log(`A TV está conectada agora no ${tv.connectedTo}`);
