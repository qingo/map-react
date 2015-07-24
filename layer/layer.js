import TileLayer from './tileLayer'
export default class Layer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            style: {
                position: 'relative',
                overflow: 'hidden',
                width: '100%',
                height: '100%'
            }
        }
    }

    componentDidMount(){

    }
    render(){
        var type= this.props.type,
            node;
        switch (type){
            case 'tileLayer': node = <TileLayer style={this.state.style} className='tileLayer'/>;
                break;
            default: node = <div style={this.state.style}/>;
        }
        return(
            node
        )

    }


}