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
    <div >
    
    {count >0 ?<p >Reamaining Charecter: <i className='text-danger'>{250-count}</i>/250</p> :''}
    </div>
    </div>
    
    
    </>
  )
}

export default Message