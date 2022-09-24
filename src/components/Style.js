import React from 'react'
import './Style.css'

const heading={
    fontSize:'72px',
    color:'blue'
}
function Style() {
  return (
    <div>
        <h4 className='primary'>Hello from style</h4>
        {/* <h4 style={heading}>Hello from style</h4> */}
        
        
    </div>
  )
}

export default Style