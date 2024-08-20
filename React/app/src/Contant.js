import React from "react";
import Props from "./Props";
import ClassComponent from "./ClassComponent";
import State from "./State";
import StateInClassComponent from "./StateInClassComponent"

function Contant() {
  const carInfo = {
    color: "Silver White",
    model: "Range Rover SUV",
    company: "Land Rover",
  };
  const bikeInfo = {
    color: "orange and white",
    model: "RC 200",
    company: "KTM",
  };
  const name="Abishek R"
  return (
    <main>
      <Props carInfo={carInfo} name={name}/>
      <ClassComponent  bikeInfo={bikeInfo} name={name}/>
      <State />
      <StateInClassComponent/>
    </main>
  );
}
export default Contant;
