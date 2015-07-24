import Layer from './layer/layer'
export default class Map extends React.Component {
    constructor(props) {
        super(props);
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
            layers: [{type: 'tileLayer'}],
            coords: {
                latitude: 0,
                longitude: 0
            }
        }
    }

    render() {
        var layers = this.renderLayers();
        return (
            <div style={this.state.style}
                 onResize={this.resize}>
                {layers}
            </div>
        )
    }

    renderLayers() {
        var layers = [];
        this.state.layers.forEach(layer => {
            //todo layer props
            layers.push(
                <Layer
                    type={layer.type}
                    dimensions={this.state.dimensions}
                    coords={this.state.coords}/>);
        });
        return layers;
    }

    addLayer(layer) {
        var layers = this.state.layers;
        this.setState({layers: layers.push(layer)})
    }

    resize() {
        var ele = this.getDOMNode();
        this.setState({dimensions: {
            height: ele.clientHeight,
            width : ele.clientWidth}
        });
    }

    locate({lat, lon}) {
        this.setState({coords: {lat, lon}})
    }
}