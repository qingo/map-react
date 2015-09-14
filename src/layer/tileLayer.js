import Tile from '../element/tile'
import coords from '../stores/config'
import Coordinate from '../util/coordinate'

var tile = new Coordinate(coords.latitude, coords.longitude, coords.zoom).toTile(256, 12);
export default class TileLayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tiles: []
        }
    }

    render() {
        return (
            <div>
                {this.state.tiles}
            </div>
        )
    }

    componentDidMount(){
        this.setState({tiles: this.renderTiles()});
    }

    renderTiles() {
        var tiles = [<Tile top={tile.top}
                           left={tile.left}
                           x={tile.x}
                           y={tile.y}
                           z={coords.zoom}
            />];
        this.arrange();
        this.state.tiles.forEach(tile => {
            tiles.push(<Tile top={tile.top}
                             left={tile.left}
                             x={tile.x}
                             y={tile.y}
                             z={coords.zoom}
                />)
        });
        return tiles;
    }

    arrange() {
        var node = React.findDOMNode(this);
        var height = node.clientHeight,
            width = node.clientWidth;
        var coords = coords,
            dimensions = this.props.dimensions;

    }

}