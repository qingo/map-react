jest.dontMock('../../util/coordinate');
var Coordinate = require('../../util/coordinate');

describe('class Coordinate', function () {
    describe('#constructor', function () {
        var coords = new Coordinate(0, 0, 0);
        it('init Coordinate', function () {
            expect(coords.latitude).toBe(0);
            expect(coords.longitude).toBe(0);
            expect(coords.zoom).toBe(0);
        });
    });
    describe('#resolute', function () {
        var coords = new Coordinate(0, 0, 0);
        var resolute = coords.resolute(256, 0);
        it('when latitude is 0 and longitude is 0 and zoom is 0', function () {
            console.log(resolute);
            expect(resolute).toBe(156543.03392804097)
        });
    });
    describe('#toMercator', function () {
        var coords = new Coordinate(0, 0, 0);
        var mercator = coords.toMercator();
        it('mercator', function(){
            expect(mercator.x).toBe(0);
            expect(mercator.y).toBe(0);
        })
    });
    describe('#toPixel', function () {

    });
    describe('#toTile', function () {

    });
});