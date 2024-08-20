import React from "react";

class ClassComponent extends React.Component{
    render(){
        const {bikeInfo,name}=this.props;
        const {color,model,company}=bikeInfo;
        return<>
            <h1>Props in class component:</h1>
            <h2>Output:</h2>
            <h3>{name}</h3>
            <p>I Bought a {company} company {model} model {color} color Bike</p>
        </>    
    }
}
export default ClassComponent;