//function components
function Car(props) {
  return (
    <div>
      <h1>car brand is {props.brand} and prize is {props.prize}</h1>
    </div>
  );
}

export default Car;

//destructuring for class components
// const Car=({brand,prize})=>{
//   return (
//   <h1>car name is {brand} and prize iis {prize}</h1>
//   )
// }
// export default Car;