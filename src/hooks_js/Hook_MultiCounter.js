import React,{useState} from 'react'

function Hook_MultiCounter() {

    const initialcount=0
    const[count,setCount]=useState(initialcount);

    const incrementFive=()=>{

        for(let i=0;i<5;i++){
           // setCount(count+1) // it will increment by 1 only
            setCount(prevCount=>prevCount+1) // it will increment by 5
        }
    }

  return (
    <div>
       count: {count} <br></br>
       <button onClick={()=>setCount(0)}>Reset</button>
       <button onClick={()=>setCount(count+1)}>Increment</button>
       <button onClick={()=>setCount(count-1)}>Decrement</button>
       <button onClick={incrementFive}>Increment 5</button>
    </div>
  )
}

export default Hook_MultiCounter