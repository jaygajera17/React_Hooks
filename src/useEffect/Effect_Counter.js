import React,{useState,useEffect} from 'react'

function Effect_Counter() {
    const [counter,setCounter]=useState(0)
    const [name,setName]=useState('')
    
    useEffect( //useEffect run after every render of the component
        ()=>{
            console.log('useEffect called')
            document.title=`Clicked ${counter} times`
        },[counter] //useEffect run only when counter changes
    )
 
    return (
    <div>
        <input type="text" value={name} onChange={e=>setName(e.target.value)}/> {/* problem:- every input useeffect log message  how conditionioing run useEffect only when count value change
                                                                                    solution :-  react introduce condition as a 2nd argument in UseEffect*/}
      <button onClick={()=> setCounter(counter+1)}>{counter}</button>  
    </div>
  )
  
}

export default Effect_Counter