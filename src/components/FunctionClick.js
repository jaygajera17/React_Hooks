import React from 'react'

function FunctionClick() {

    function clickHandler(){
        console.log("button clicked");
    }

  return (
    <div>
        <br></br>
        <br></br>
        <button onClick={clickHandler}>Click from F.C</button> {/* Onclick="clickHandler()" will not work  */}
    </div>
  )
}

export default FunctionClick