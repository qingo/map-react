import TileLayer from './tileLayer'
export default class Layer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        return(
	        <TileLayer className='tile-layer'/>
        )
    }
}