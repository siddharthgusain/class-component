import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


class App extends Component{

  state={
      lat:null,
      err:''
    };

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (pos)=>this.setState({lat:pos.coords.latitude}),
            (err)=>this.setState({err:err.message})
        );
    }
    
    renderConditionally(){

        if(this.state.err && !this.state.lat){
            return <div>Error:{this.state.err}</div>;
       }

       if(!this.state.err && this.state.lat){
           return <SeasonDisplay lat={this.state.lat}/>;
       }

       return <Spinner message="Please accept location request"/>

    }

    render(){
      
          return (
            <div >
                {this.renderConditionally()}
            </div>
          );
       
    }
}


ReactDOM.render(<App/>,document.getElementById('root'));