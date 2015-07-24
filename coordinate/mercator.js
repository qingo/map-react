const ARC = Math.PI / 180;
const SemiAxis = 6378137;
const Perimeter = 2 * Math.PI * SemiAxis;

class Mercator {
    constructor(size = 256) {
        this.size = size;
        this.initialResolution = Perimeter / this.size;
        this.originShift = Perimeter / 2.0
    }

    resolute(zoom) {
        return this.initialResolution / (Math.pow(2, zoom))
    }

    latLon2Meters(lat, lon) {
        var mx = lon * this.originShift / 180.0,
            my = Math.log(Math.tan((90 + lat) * Math.PI / 360.0)) / (Math.PI / 180.0);
        my = my * this.originShift / 180.0;
        return {mx, my}
    }

    meters2LatLon(mx, my) {
        var lon = (mx / this.originShift) * 180.0,
            lat = (my / this.originShift) * 180.0;
        lat = 180 / Math.PI * (2 * Math.atan(Math.exp(lat * Math.PI / 180.0)) - Math.PI / 2.0);
        return {lat, lon}
    }

    pixels2Meters(px, py, zoom) {
        var res = this.resolute(zoom),
            mx = px * res - this.originShift,
            my = py * res - this.originShift;
        return {mx, my}
    }

    meters2Pixels(mx, my, zoom) {
        var res = this.resolute(zoom),
            px = (mx + this.originShift) / res,
            py = (my + this.originShift) / res;
        return {px, py}
    }

    pixels2Tile(px, py) {
        var tx = Math.ceil(px / this.size) - 1,
            ty = Math.ceil(py / this.size) - 1;
        return {tx, ty}
    }
}