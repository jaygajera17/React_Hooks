import React,{useState} from 'react'

function Hook_counter2() {

    const [Name,setName]=useState({firstName:'',lastName:''})
  return (
    <div>
        <form>
            <input type="text"
             value={Name.firstName} 
             onChange={e => setName({...Name,firstName: e.target.value})} /> {/* ...Name is used to copy the previous value of Name && override firstname */}
            <input type="text"
             value={Name.lastName} 
             onChange={e => setName({...Name, lastName: e.target.value})}
              />
            <h2>your first name is - {Name.firstName}</h2>
            <h2>your last name is - {Name.lastName}</h2>
        </form>
    </div>
  )
}

export default Hook_counter2