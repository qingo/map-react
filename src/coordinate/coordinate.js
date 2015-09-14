const ARC = Math.PI / 180;
const SemiAxis = 6378137;
const Perimeter = 2 * Math.PI * SemiAxis;
const SemiPerimeter = Perimeter / 2.0;

export default class Coordinate {
    constructor(latitude, longtitude, zoom) {
        this.zoom = 0;
        this.size = 256;
        this.meterPerPixel = Perimeter / this.size / (Math.pow(2, zoom));

        this.latitude = latitude;
        this.longitude = longtitude;

        this.mercatorX = this.latitude * SemiPerimeter / 180.0;
        this.mercatorY = Math.log(Math.tan((90 + this.latitude) * Math.PI / 360.0)) / (Math.PI / 180.0);
        this.mercatorY = this.mercatorY * SemiPerimeter / 180.0;

        this.x = ( this.mercatorX + SemiPerimeter )/this.meterPerPixel;
        this.y = ( this.mercatorY + SemiPerimeter )/this.meterPerPixel;

        this.tileX = Math.ceil(this.x / this.size) - 1;
        this.tileY = Math.ceil(this.y / this.size) - 1;
    }
}