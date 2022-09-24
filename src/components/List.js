import React from 'react'

function List() {
   
    const persons = [
        {
            id:1,
            fName: 'Jay',
            lname: 'Patel',
        },
        {
            id:2,
            fName: 'Bruce',
            lname: 'banner',
        }
    ]
    const personList = persons.map(person => <p>I am {person.fName} {person.lname}</p>)
  return (
    <div>
        {
            personList
        }
    </div>
  )
}

export default List