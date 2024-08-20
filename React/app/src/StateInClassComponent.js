import react,{ useState } from "react";

class StateInClassComponent extends react.Component{
    constructor(){
        super();
        this.state={lightStatus:'OFF'}
    }

    
    render(){
        return <>
            <h1>Props in class component:</h1>
            <h2>Output:</h2>
            <p>Light is {this.state.lightStatus}</p>
            <button onClick={this.setState({lightStatus:'ON'})}>ON</button>
        </>
    }
}
export default StateInClassComponent;