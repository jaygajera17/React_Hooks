import React,{useState} from 'react'

function Hook_counter(props) {
        // usesState={state,setState}
    const [count,setCount]=useState(0) //count initialize 0
  return (
    <div>
        <button onClick={()=> setCount(count+1)}> {props.name} {count} </button>
    </div>
  )
}

export default Hook_counter