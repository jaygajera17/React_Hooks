import React,{useState} from 'react'

function Time() {
    const now=new Date().toLocaleTimeString();

    setInterval(updateTime,1000);
    const [time,setTime]=useState(now);

    function updateTime(){
        const newTime= new Date().toLocaleTimeString();
      setTime(newTime);
    }
  return (
    <div>

      <h1>{time}</h1>
      <button onClick={updateTime}>
       Get Time
      </button>

    </div>
    
  )
}

export default Time