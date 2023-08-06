import React from 'react'
import '../App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons'
import {useEffect, useState} from 'react'
import { json } from 'react-router-dom';
let Form=()=> {
     
 let [info,setInfo]=useState({uname:"",password:"",passvisible:true})
 let [check,setCheck]=useState(false);
 let [disble,setDisble]=useState(true)
 

let onchangeHnd=(event)=>{
  const {name,value}=event.target
  setInfo({...info,[name]:value})
}
let cboxHandl=()=>{
 
 check ?setCheck(false):setCheck(true)
}
useEffect(()=>{
  check ? setDisble(false):setDisble(true);
},[check])
 let iconToggle=()=>{
      info.passvisible ? setInfo({...info,passvisible:false}):setInfo({...info,passvisible:true})
   }

let submitHand=(event)=>{
    event.preventDefault();
    console.log(info);
    /*
    let errors=info;
    if(!info.uname.trim()){
      errors.uname='first name required';
    }else{
      errors.uname='';
    }
    var reg = '/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/';
    var password= info.password;
    if(!password){
      password='password required'
    }
    else if(password.length >6 && password.length <15){
        password='password must be greater than 6 and less than 15'
    }
    else if(password.match(reg)){
      password='passord must contain one charecter,greater Alpha,small alpha and num'
    }
    else{
      password='';
    }
*/
  
    event.target.reset()
    
  }
  return (
    <>
    <h3>Function Wala</h3>
    <div className="container   d-flex justify-content-center align-item-center mt-5 rounded">
        <form onSubmit={submitHand}>
          <label >UserName</label>
         &nbsp; <input type='text' name="uname" onChange={onchangeHnd} className='rounded mt-3'
          required='required'  />
          
          <br />
          <div className='passwordfiled mt-2'>
          <label className='mt-1' > Password </label>
          &nbsp; &nbsp;  <input type={info.passvisible ? "password" :"text"} name="password" className='pass rounded ml-1'
          onChange={onchangeHnd}  />
         <span>
         <FontAwesomeIcon 
            icon={ info.passvisible ?  faEye:faEyeSlash  }
            onClick={iconToggle}
         />
         </span>
         </div>
          <br />
          <input type="checkbox" className='ml-2 mt-3' 
            checked={check} onChange={cboxHandl}
          />Accept <a href='google.com'>T&C</a>
          <br />
          <input type="submit"  className='ml-2 mt-5 mb-3' disabled={disble} />
        </form>
       
      </div>
      <h4>{JSON.stringify(info)}</h4>
    </>
  )
}

export default Form