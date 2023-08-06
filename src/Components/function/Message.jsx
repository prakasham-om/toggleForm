import React from 'react'
import { useState } from 'react'
const Message = () => {
    let [count,setCount]=useState(0)
    let handler=(event)=>{
        let xcount=event.target.value.length
        setCount(xcount)
    
    }
 
  return (
    <>
    <h3>Message</h3>
   
    <div className="containers">
    
    <br />
    <textarea
    maxLength={250}
    className='messageBox'
    placeholder="Enter text..."
    onChange={handler}

  />

    {count >0 ?<p className='text-danger'>Reamaining Charecter: <h5>{250-count}</h5></p> :<p className='text-dark'>Total harecter:<h6>{250}</h6></p>}
    </div>
    
    
    </>
  )
}

export default Message