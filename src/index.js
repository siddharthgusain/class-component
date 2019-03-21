import React,{Component} from 'react';
import ReactDOM from 'react-dom';


class App extends Component{

    constructor(props){
        super(props);
        this.state = {lat:null,err:''};

        window.navigator.geolocation.getCurrentPosition(
            (pos)=>this.setState({lat:pos.coords.latitude}),
            (err)=>this.setState({err:err.message})
        );
    }
    
    render(){
      
           if(this.state.err && !this.state.lat){
                return <div>Error:{this.state.err}</div>
           }

           if(!this.state.err && this.state.lat){
               return <div>Latitude:{this.state.lat}</div>
           }

           return <div>Loading....</div>

       
    }
}


ReactDOM.render(<App/>,document.getElementById('root'));