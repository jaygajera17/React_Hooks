import React,{useState} from 'react'

function Hookcounter3() {
    const [items,setItems]=useState([])

    const addItem=()=>{
        setItems([...items,{  //when item called we make a copy of all the items in a array using spread operator and add a new item
            id:items.length,
            value:Math.floor(Math.random()*10)+1
        }])
    }
  return (
    <div>
        <button onClick={addItem}>Add a number</button>
      <ul>  {
            items.map(item=>(
             <li key={item.id}>{item.value}</li>
        ))}</ul>
    </div>
  )
}

export default Hookcounter3