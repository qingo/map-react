export default class Tile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            style: {
                left: 0,
                top: 0,
                width: '256px',
                height: '256px'
            },
            src: 'empty.png'

        }
    }

    render() {
        return (
            <img src={`http://a.tile.openstreetmap.org/${this.props.z}/${this.props.x}/${this.props.y}.png`} style={this.state.style}/>
        )
    }

    load(){
        this.setState({src: `https://mts1.google.com/vt/lyrs=m@186112443&hl=x-local&src=app&x=${this.props.x}&y=${this.props.y}&z=${this.props.z}&s=Galile`})
    }
    offset({left, top}) {
        this.setState({style: {left, top}})
    }
}