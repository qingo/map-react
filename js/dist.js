(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var Tile = (function (_React$Component) {
    _inherits(Tile, _React$Component);

    function Tile(props) {
        _classCallCheck(this, Tile);

        _get(Object.getPrototypeOf(Tile.prototype), 'constructor', this).call(this, props);
        this.state = {
            style: {
                left: 0,
                top: 0,
                width: '256px',
                height: '256px'
            },
            src: 'empty.png'

        };
    }

    _createClass(Tile, [{
        key: 'render',
        value: function render() {
            return React.createElement('img', { src: 'http://a.tile.openstreetmap.org/' + this.props.z + '/' + this.props.x + '/' + this.props.y + '.png', style: this.state.style });
        }
    }, {
        key: 'load',
        value: function load() {
            this.setState({ src: 'https://mts1.google.com/vt/lyrs=m@186112443&hl=x-local&src=app&x=' + this.props.x + '&y=' + this.props.y + '&z=' + this.props.z + '&s=Galile' });
        }
    }, {
        key: 'offset',
        value: function offset(_ref) {
            var left = _ref.left;
            var top = _ref.top;

            this.setState({ style: { left: left, top: top } });
        }
    }]);

    return Tile;
})(React.Component);

exports['default'] = Tile;
module.exports = exports['default'];

},{}],2:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _map = require('../map');

var _map2 = _interopRequireDefault(_map);

React.render(React.createElement(_map2['default'], null), document.getElementById('map'));

},{"../map":5}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _tileLayer = require('./tileLayer');

var _tileLayer2 = _interopRequireDefault(_tileLayer);

var Layer = (function (_React$Component) {
    _inherits(Layer, _React$Component);

    function Layer(props) {
        _classCallCheck(this, Layer);

        _get(Object.getPrototypeOf(Layer.prototype), 'constructor', this).call(this, props);
        this.state = {
            style: {
                position: 'relative',
                overflow: 'hidden',
                width: '100%',
                height: '100%'
            }
        };
    }

    _createClass(Layer, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'render',
        value: function render() {
            var type = this.props.type,
                node;
            switch (type) {
                case 'tileLayer':
                    node = React.createElement(_tileLayer2['default'], { style: this.state.style, className: 'tileLayer' });
                    break;
                default:
                    node = React.createElement('div', { style: this.state.style });
            }
            return node;
        }
    }]);

    return Layer;
})(React.Component);

exports['default'] = Layer;
module.exports = exports['default'];

},{"./tileLayer":4}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _elementTile = require('../element/tile');

var _elementTile2 = _interopRequireDefault(_elementTile);

var _storesConfig = require('../stores/config');

var _storesConfig2 = _interopRequireDefault(_storesConfig);

var _utilCoordinate = require('../util/coordinate');

var _utilCoordinate2 = _interopRequireDefault(_utilCoordinate);

var tile = new _utilCoordinate2['default'](_storesConfig2['default'].latitude, _storesConfig2['default'].longitude, _storesConfig2['default'].zoom).toTile(256, 12);

var TileLayer = (function (_React$Component) {
    _inherits(TileLayer, _React$Component);

    function TileLayer(props) {
        _classCallCheck(this, TileLayer);

        _get(Object.getPrototypeOf(TileLayer.prototype), 'constructor', this).call(this, props);
        this.state = {
            tiles: [],
            style: {
                position: 'absolute',
                overflow: 'hidden',
                width: '100%',
                height: '100%'
            }
        };
    }

    _createClass(TileLayer, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { style: this.state.style },
                this.state.tiles
            );
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            console.log(this.renderTiles());
            this.setState({ tiles: this.renderTiles() });
            console.log(this.state.tiles);
        }
    }, {
        key: 'renderTiles',
        value: function renderTiles() {
            var tiles = [React.createElement(_elementTile2['default'], { top: tile.top,
                left: tile.left,
                x: tile.x,
                y: tile.y,
                z: _storesConfig2['default'].zoom
            })];
            this.arrange();
            this.state.tiles.forEach(function (tile) {
                tiles.push(React.createElement(_elementTile2['default'], { top: tile.top,
                    left: tile.left,
                    x: tile.x,
                    y: tile.y,
                    z: _storesConfig2['default'].zoom
                }));
            });
            console.log(tiles);
            return tiles;
        }
    }, {
        key: 'arrange',
        value: function arrange() {
            var node = React.findDOMNode(this);
            var height = node.clientHeight,
                width = node.clientWidth;
            var coords = coords,
                dimensions = this.props.dimensions;
        }
    }]);

    return TileLayer;
})(React.Component);

exports['default'] = TileLayer;
module.exports = exports['default'];

},{"../element/tile":1,"../stores/config":6,"../util/coordinate":7}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _layerLayer = require('./layer/layer');

var _layerLayer2 = _interopRequireDefault(_layerLayer);

var Map = (function (_React$Component) {
    _inherits(Map, _React$Component);

    function Map(props) {
        _classCallCheck(this, Map);

        _get(Object.getPrototypeOf(Map.prototype), 'constructor', this).call(this, props);
        this.state = {
            style: {
                position: 'relative',
                overflow: 'hidden',
                width: '100%',
                height: '100%'
            },
            dimensions: {
                width: 0,
                height: 0
            },
            layers: [{ type: 'tileLayer' }],
            coords: {
                latitude: 0,
                longitude: 0
            }
        };
    }

    _createClass(Map, [{
        key: 'render',
        value: function render() {
            var layers = this.renderLayers();
            return React.createElement(
                'div',
                { style: this.state.style,
                    onResize: this.resize },
                layers
            );
        }
    }, {
        key: 'renderLayers',
        value: function renderLayers() {
            var _this = this;

            var layers = [];
            this.state.layers.forEach(function (layer) {
                //todo layer props
                layers.push(React.createElement(_layerLayer2['default'], {
                    type: layer.type,
                    dimensions: _this.state.dimensions,
                    coords: _this.state.coords }));
            });
            return layers;
        }
    }, {
        key: 'addLayer',
        value: function addLayer(layer) {
            var layers = this.state.layers;
            this.setState({ layers: layers.push(layer) });
        }
    }, {
        key: 'resize',
        value: function resize() {
            var ele = this.getDOMNode();
            this.setState({ dimensions: {
                    height: ele.clientHeight,
                    width: ele.clientWidth }
            });
        }
    }, {
        key: 'locate',
        value: function locate(_ref) {
            var lat = _ref.lat;
            var lon = _ref.lon;

            this.setState({ coords: { lat: lat, lon: lon } });
        }
    }]);

    return Map;
})(React.Component);

exports['default'] = Map;
module.exports = exports['default'];

},{"./layer/layer":3}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = {
    latitude: 26.6527475,
    longitude: 106.706816,
    zoom: 13
};
module.exports = exports["default"];

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PI = Math.PI;
var ARC = PI / 180; //ÿ�ȵĻ���ֵ
var Radius = 6378137; //�����뾶
var Equator = 2 * PI * Radius; //��������
var SemiEquator = Equator / 2.0; //�������ܳ�

var Coordinate = (function () {
    function Coordinate(latitude, longtitude, zoom) {
        _classCallCheck(this, Coordinate);

        this.latitude = latitude;
        this.longitude = longtitude;
        this.zoom = zoom;
    }

    /**
     * @desc ÿһ���صĶ�Ӧ�ĵ�������ֵ
     * @param size
     * @param zoom
     * @returns {number}
     */

    _createClass(Coordinate, [{
        key: "resolute",
        value: function resolute() {
            var size = arguments.length <= 0 || arguments[0] === undefined ? 256 : arguments[0];
            var zoom = arguments.length <= 1 || arguments[1] === undefined ? this.zoom : arguments[1];

            return Equator / (size * Math.pow(2, zoom));
        }

        /**
         * @desc ת��Ϊī��������
         * @returns {{x: number, y: number}}
         */
    }, {
        key: "toMercator",
        value: function toMercator() {
            var x = this.longitude * SemiEquator / 180.0,
                y = Math.log(Math.tan((90 + this.latitude) * PI / 360.0)) / (PI / 180.0);
            y = y * SemiEquator / 180.0;
            return { x: x, y: y };
        }

        /**
         * @desc ת��Ϊ���ص�
         * @param size
         * @param zoom
         * @returns {{x: number, y: number}}
         */
    }, {
        key: "toPixel",
        value: function toPixel(size, zoom) {
            var mercator = this.toMercator();
            var res = this.resolute(size, zoom);
            var x = (mercator.x + SemiEquator) / res,
                y = (mercator.y + SemiEquator) / res;
            return { x: x, y: y };
        }

        /**
         * @desc ת��Ϊ�ſ�
         * @param size
         * @param zoom
         * @returns {{x: number, y: number}}
         */
    }, {
        key: "toTile",
        value: function toTile(size, zoom) {
            var pixel = this.toPixel(size, zoom);
            var x = Math.ceil(pixel.x / size) - 1,
                y = Math.ceil(pixel.y / size) - 1;
            return { x: x, y: y };
        }
    }]);

    return Coordinate;
})();

exports["default"] = Coordinate;
module.exports = exports["default"];

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJFOi9EZW1vL21hcC1yZWFjdC9lbGVtZW50L3RpbGUuanMiLCJFOi9EZW1vL21hcC1yZWFjdC9qcy9zcmMuanMiLCJFOi9EZW1vL21hcC1yZWFjdC9sYXllci9sYXllci5qcyIsIkU6L0RlbW8vbWFwLXJlYWN0L2xheWVyL3RpbGVMYXllci5qcyIsIkU6L0RlbW8vbWFwLXJlYWN0L21hcC5qcyIsIkU6L0RlbW8vbWFwLXJlYWN0L3N0b3Jlcy9jb25maWcuanMiLCJFOi9EZW1vL21hcC1yZWFjdC91dGlsL2Nvb3JkaW5hdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztJQ0FxQixJQUFJO2NBQUosSUFBSTs7QUFDVixhQURNLElBQUksQ0FDVCxLQUFLLEVBQUU7OEJBREYsSUFBSTs7QUFFakIsbUNBRmEsSUFBSSw2Q0FFWCxLQUFLLEVBQUU7QUFDYixZQUFJLENBQUMsS0FBSyxHQUFHO0FBQ1QsaUJBQUssRUFBRTtBQUNILG9CQUFJLEVBQUUsQ0FBQztBQUNQLG1CQUFHLEVBQUUsQ0FBQztBQUNOLHFCQUFLLEVBQUUsT0FBTztBQUNkLHNCQUFNLEVBQUUsT0FBTzthQUNsQjtBQUNELGVBQUcsRUFBRSxXQUFXOztTQUVuQixDQUFBO0tBQ0o7O2lCQWJnQixJQUFJOztlQWVmLGtCQUFHO0FBQ0wsbUJBQ0ksNkJBQUssR0FBRyx1Q0FBcUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQU8sRUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEFBQUMsR0FBRSxDQUM5SDtTQUNKOzs7ZUFFRyxnQkFBRTtBQUNGLGdCQUFJLENBQUMsUUFBUSxDQUFDLEVBQUMsR0FBRyx3RUFBc0Us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QTtTQUNoQjs7Ozs7Ozs7OztlQVFNLGlCQUFDLElBQUksRUFBRSxJQUFJLEVBQUU7QUFDaEIsZ0JBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUNqQyxnQkFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDcEMsZ0JBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUEsR0FBSSxHQUFHO2dCQUNwQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQSxHQUFJLEdBQUcsQ0FBQztBQUN6QyxtQkFBTyxFQUFDLENBQUMsRUFBRCxDQUFDLEVBQUUsQ0FBQyxFQUFELENBQUMsRUFBQyxDQUFBO1NBQ2hCOzs7Ozs7Ozs7O2VBUUssZ0JBQUMsSUFBSSxFQUFFLElBQUksRUFBRTtBQUNmLGdCQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNyQyxnQkFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7Z0JBQ2pDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3RDLG1CQUFPLEVBQUMsQ0FBQyxFQUFELENBQUMsRUFBRSxDQUFDLEVBQUQsQ0FBQyxFQUFDLENBQUE7U0FDaEI7OztXQXJEZ0IsVUFBVTs7O3FCQUFWLFVBQVUiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICB3aWR0aDogJzI1NnB4JyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICcyNTZweCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzcmM6ICdlbXB0eS5wbmcnXG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cDovL2EudGlsZS5vcGVuc3RyZWV0bWFwLm9yZy8ke3RoaXMucHJvcHMuen0vJHt0aGlzLnByb3BzLnh9LyR7dGhpcy5wcm9wcy55fS5wbmdgfSBzdHlsZT17dGhpcy5zdGF0ZS5zdHlsZX0vPlxuICAgICAgICApXG4gICAgfVxuXG4gICAgbG9hZCgpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtzcmM6IGBodHRwczovL210czEuZ29vZ2xlLmNvbS92dC9seXJzPW1AMTg2MTEyNDQzJmhsPXgtbG9jYWwmc3JjPWFwcCZ4PSR7dGhpcy5wcm9wcy54fSZ5PSR7dGhpcy5wcm9wcy55fSZ6PSR7dGhpcy5wcm9wcy56fSZzPUdhbGlsZWB9KVxuICAgIH1cbiAgICBvZmZzZXQoe2xlZnQsIHRvcH0pIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c3R5bGU6IHtsZWZ0LCB0b3B9fSlcbiAgICB9XG59IiwiaW1wb3J0IE1hcCBmcm9tICcuLi9tYXAnXHJcblJlYWN0LnJlbmRlcihcclxuICAgIDxNYXAgLz4sXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJylcclxuKTsiLCJpbXBvcnQgVGlsZUxheWVyIGZyb20gJy4vdGlsZUxheWVyJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF5ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xuXG4gICAgfVxuICAgIHJlbmRlcigpe1xuICAgICAgICB2YXIgdHlwZT0gdGhpcy5wcm9wcy50eXBlLFxuICAgICAgICAgICAgbm9kZTtcbiAgICAgICAgc3dpdGNoICh0eXBlKXtcbiAgICAgICAgICAgIGNhc2UgJ3RpbGVMYXllcic6IG5vZGUgPSA8VGlsZUxheWVyIHN0eWxlPXt0aGlzLnN0YXRlLnN0eWxlfSBjbGFzc05hbWU9J3RpbGVMYXllcicvPjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6IG5vZGUgPSA8ZGl2IHN0eWxlPXt0aGlzLnN0YXRlLnN0eWxlfS8+O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIG5vZGVcbiAgICAgICAgKVxuXG4gICAgfVxuXG5cbn0iLCJpbXBvcnQgVGlsZSBmcm9tICcuLi9lbGVtZW50L3RpbGUnXG5pbXBvcnQgY29vcmRzIGZyb20gJy4uL3N0b3Jlcy9jb25maWcnXG5pbXBvcnQgQ29vcmRpbmF0ZSBmcm9tICcuLi91dGlsL2Nvb3JkaW5hdGUnXG5cbnZhciB0aWxlID0gbmV3IENvb3JkaW5hdGUoY29vcmRzLmxhdGl0dWRlLCBjb29yZHMubG9uZ2l0dWRlLCBjb29yZHMuem9vbSkudG9UaWxlKDI1NiwgMTIpO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlsZUxheWVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB0aWxlczogW10sXG4gICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt0aGlzLnN0YXRlLnN0eWxlfT5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS50aWxlc31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5yZW5kZXJUaWxlcygpKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dGlsZXM6IHRoaXMucmVuZGVyVGlsZXMoKX0pO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnRpbGVzKTtcbiAgICB9XG5cbiAgICByZW5kZXJUaWxlcygpIHtcbiAgICAgICAgdmFyIHRpbGVzID0gWzxUaWxlIHRvcD17dGlsZS50b3B9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0PXt0aWxlLmxlZnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB4PXt0aWxlLnh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB5PXt0aWxlLnl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB6PXtjb29yZHMuem9vbX1cbiAgICAgICAgICAgIC8+XTtcbiAgICAgICAgdGhpcy5hcnJhbmdlKCk7XG4gICAgICAgIHRoaXMuc3RhdGUudGlsZXMuZm9yRWFjaCh0aWxlID0+IHtcbiAgICAgICAgICAgIHRpbGVzLnB1c2goPFRpbGUgdG9wPXt0aWxlLnRvcH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdD17dGlsZS5sZWZ0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4PXt0aWxlLnh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk9e3RpbGUueX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgej17Y29vcmRzLnpvb219XG4gICAgICAgICAgICAgICAgLz4pXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyh0aWxlcyk7XG4gICAgICAgIHJldHVybiB0aWxlcztcbiAgICB9XG5cbiAgICBhcnJhbmdlKCkge1xuICAgICAgICB2YXIgbm9kZSA9IFJlYWN0LmZpbmRET01Ob2RlKHRoaXMpO1xuICAgICAgICB2YXIgaGVpZ2h0ID0gbm9kZS5jbGllbnRIZWlnaHQsXG4gICAgICAgICAgICB3aWR0aCA9IG5vZGUuY2xpZW50V2lkdGg7XG4gICAgICAgIHZhciBjb29yZHMgPSBjb29yZHMsXG4gICAgICAgICAgICBkaW1lbnNpb25zID0gdGhpcy5wcm9wcy5kaW1lbnNpb25zO1xuXG4gICAgfVxuXG59IiwiaW1wb3J0IExheWVyIGZyb20gJy4vbGF5ZXIvbGF5ZXInXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkaW1lbnNpb25zOiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGF5ZXJzOiBbe3R5cGU6ICd0aWxlTGF5ZXInfV0sXG4gICAgICAgICAgICBjb29yZHM6IHtcbiAgICAgICAgICAgICAgICBsYXRpdHVkZTogMCxcbiAgICAgICAgICAgICAgICBsb25naXR1ZGU6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIGxheWVycyA9IHRoaXMucmVuZGVyTGF5ZXJzKCk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt0aGlzLnN0YXRlLnN0eWxlfVxuICAgICAgICAgICAgICAgICBvblJlc2l6ZT17dGhpcy5yZXNpemV9PlxuICAgICAgICAgICAgICAgIHtsYXllcnN9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIHJlbmRlckxheWVycygpIHtcbiAgICAgICAgdmFyIGxheWVycyA9IFtdO1xuICAgICAgICB0aGlzLnN0YXRlLmxheWVycy5mb3JFYWNoKGxheWVyID0+IHtcbiAgICAgICAgICAgIC8vdG9kbyBsYXllciBwcm9wc1xuICAgICAgICAgICAgbGF5ZXJzLnB1c2goXG4gICAgICAgICAgICAgICAgPExheWVyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9e2xheWVyLnR5cGV9XG4gICAgICAgICAgICAgICAgICAgIGRpbWVuc2lvbnM9e3RoaXMuc3RhdGUuZGltZW5zaW9uc31cbiAgICAgICAgICAgICAgICAgICAgY29vcmRzPXt0aGlzLnN0YXRlLmNvb3Jkc30vPik7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbGF5ZXJzO1xuICAgIH1cblxuICAgIGFkZExheWVyKGxheWVyKSB7XG4gICAgICAgIHZhciBsYXllcnMgPSB0aGlzLnN0YXRlLmxheWVycztcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bGF5ZXJzOiBsYXllcnMucHVzaChsYXllcil9KVxuICAgIH1cblxuICAgIHJlc2l6ZSgpIHtcbiAgICAgICAgdmFyIGVsZSA9IHRoaXMuZ2V0RE9NTm9kZSgpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtkaW1lbnNpb25zOiB7XG4gICAgICAgICAgICBoZWlnaHQ6IGVsZS5jbGllbnRIZWlnaHQsXG4gICAgICAgICAgICB3aWR0aCA6IGVsZS5jbGllbnRXaWR0aH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbG9jYXRlKHtsYXQsIGxvbn0pIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y29vcmRzOiB7bGF0LCBsb259fSlcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIGxhdGl0dWRlOiAyNi42NTI3NDc1LFxuICAgIGxvbmdpdHVkZTogMTA2LjcwNjgxNixcbiAgICB6b29tOiAxM1xufSIsImNvbnN0IFBJID0gTWF0aC5QSTtcclxuY29uc3QgQVJDID0gUEkgLyAxODA7IC8vw7/vv73ItcS777+977+977+91rVcclxuY29uc3QgUmFkaXVzID0gNjM3ODEzNzsgLy/vv73vv73vv73vv73vv73rvrZcclxuY29uc3QgRXF1YXRvciA9IDIgKiBQSSAqIFJhZGl1czsgLy/vv73vv73vv73vv73vv73vv73vv73vv71cclxuY29uc3QgU2VtaUVxdWF0b3IgPSBFcXVhdG9yIC8gMi4wOyAvL++/ve+/ve+/ve+/ve+/ve+/ve+/vdyz77+9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb29yZGluYXRlIHtcclxuICAgIGNvbnN0cnVjdG9yKGxhdGl0dWRlLCBsb25ndGl0dWRlLCB6b29tKSB7XHJcbiAgICAgICAgdGhpcy5sYXRpdHVkZSA9IGxhdGl0dWRlO1xyXG4gICAgICAgIHRoaXMubG9uZ2l0dWRlID0gbG9uZ3RpdHVkZTtcclxuICAgICAgICB0aGlzLnpvb20gPSB6b29tO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGRlc2Mgw7/Su++/ve+/ve+/vdi1xLbvv73Tpu+/vcS177+977+977+977+977+977+977+91rVcclxuICAgICAqIEBwYXJhbSBzaXplXHJcbiAgICAgKiBAcGFyYW0gem9vbVxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqL1xyXG4gICAgcmVzb2x1dGUoc2l6ZSA9IDI1Niwgem9vbSA9IHRoaXMuem9vbSkge1xyXG4gICAgICAgIHJldHVybiBFcXVhdG9yIC8gKHNpemUgKiAoTWF0aC5wb3coMiwgem9vbSkpKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGRlc2Mg16rvv73vv73OqsSr77+977+977+977+977+977+977+977+9XHJcbiAgICAgKiBAcmV0dXJucyB7e3g6IG51bWJlciwgeTogbnVtYmVyfX1cclxuICAgICAqL1xyXG4gICAgdG9NZXJjYXRvcigpIHtcclxuICAgICAgICB2YXIgeCA9IHRoaXMubG9uZ2l0dWRlICogU2VtaUVxdWF0b3IgLyAxODAuMCxcclxuICAgICAgICAgICAgeSA9IE1hdGgubG9nKE1hdGgudGFuKCg5MCArIHRoaXMubGF0aXR1ZGUpICogUEkgLyAzNjAuMCkpIC8gKFBJIC8gMTgwLjApO1xyXG4gICAgICAgIHkgPSB5ICogU2VtaUVxdWF0b3IgLyAxODAuMDtcclxuICAgICAgICByZXR1cm4ge3gsIHl9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzYyDXqu+/ve+/vc6q77+977+977+92LXvv71cclxuICAgICAqIEBwYXJhbSBzaXplXHJcbiAgICAgKiBAcGFyYW0gem9vbVxyXG4gICAgICogQHJldHVybnMge3t4OiBudW1iZXIsIHk6IG51bWJlcn19XHJcbiAgICAgKi9cclxuICAgIHRvUGl4ZWwoc2l6ZSwgem9vbSkge1xyXG4gICAgICAgIHZhciBtZXJjYXRvciA9IHRoaXMudG9NZXJjYXRvcigpO1xyXG4gICAgICAgIHZhciByZXMgPSB0aGlzLnJlc29sdXRlKHNpemUsIHpvb20pO1xyXG4gICAgICAgIHZhciB4ID0gKG1lcmNhdG9yLnggKyBTZW1pRXF1YXRvcikgLyByZXMsXHJcbiAgICAgICAgICAgIHkgPSAobWVyY2F0b3IueSArIFNlbWlFcXVhdG9yKSAvIHJlcztcclxuICAgICAgICByZXR1cm4ge3gsIHl9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzYyDXqu+/ve+/vc6q77+9xb/vv71cclxuICAgICAqIEBwYXJhbSBzaXplXHJcbiAgICAgKiBAcGFyYW0gem9vbVxyXG4gICAgICogQHJldHVybnMge3t4OiBudW1iZXIsIHk6IG51bWJlcn19XHJcbiAgICAgKi9cclxuICAgIHRvVGlsZShzaXplLCB6b29tKSB7XHJcbiAgICAgICAgdmFyIHBpeGVsID0gdGhpcy50b1BpeGVsKHNpemUsIHpvb20pO1xyXG4gICAgICAgIHZhciB4ID0gTWF0aC5jZWlsKHBpeGVsLnggLyBzaXplKSAtIDEsXHJcbiAgICAgICAgICAgIHkgPSBNYXRoLmNlaWwocGl4ZWwueSAvIHNpemUpIC0gMTtcclxuICAgICAgICByZXR1cm4ge3gsIHl9XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==
