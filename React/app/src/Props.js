function Props(props) {
  const {carInfo, name} = props;
  const {company,color,model}=carInfo;
  return (
    <>
        <h1>Props:</h1>
        <h2>Output:</h2>
        <h3>{name}</h3>
      <p>I Bought a {company} company {model} model {color} color Car</p>
    </>
  );
}

export default Props;
