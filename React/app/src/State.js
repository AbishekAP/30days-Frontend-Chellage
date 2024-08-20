import React, { useState } from "react";

function State(){

    const [color,setColor]=useState('blue');
    return <>
         <h1>State:</h1>
        <h2>Output:</h2>
        <p>sky {color} color is now!</p>
        <button onClick={()=>{setColor('orange')}}>Sunset</button>
    </>

}
export default State;