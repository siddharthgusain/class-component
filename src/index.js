import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component{
    constructor(props){
        super(props);
        this.state={
            text:null
        }
        
    }

    componentDidMount(){
        console.log("Component DID Mount");
    }
    

    render(){
        return <div>{this.state.text}</div>;
    }
}


ReactDOM.render(<App/>,document.getElementById("root"));