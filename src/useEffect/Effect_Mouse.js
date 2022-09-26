import React,{Component,useState, useEffect} from 'react'

function Effect_Mouse() {
    const [x,setX]=useState(0)
    const [y,setY]=useState(0)

    const logMousePosition=e=>{
        console.log('mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }


    useEffect(()=>
    {
        console.log('useEffect called')
        window.addEventListener('mousemove',logMousePosition)
    },[] //without condition console goes crazy
          // meaning of condition :- hey react  this effect does not depend on any value from props or state so don't re-run it so react run only once and forget about it
    )

  return (
    <div> 
        Hooks X-{x} Y-{y}
    </div>
  )
}

export default Effect_Mouse