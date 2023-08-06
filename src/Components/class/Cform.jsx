import React, { Component } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons'
class Cform extends Component {
   state ={uname:"",password:"",check:false,disble:true,passvisible:true}
    
   onchangeHnd=(event)=>{
       let {name,value}=event.target
        this.setState({[name]:value})
        console.log(this.state.uname)
        console.log(this.state.password)
    }
    submitHand=(event)=>{
        event.preventDefault();
        event.target.reset();
    }
    cboxHandl=()=>{
        this.state.check ? this.setState({check:false}) : this.setState({check:true})
        this.state.check ? this.setState({disble:true}):this.setState({disble:false})
    }
   iconToggle=()=>{
      !this.state.passvisible ? this.setState({passvisible:true}):this.setState({passvisible:false})
   }
  render() {
    return (
     <>
     <div className="container   d-flex justify-content-center align-item-center mt-5 rounded">
        <form onSubmit={this.submitHand}>
          <label >UserName</label>
         &nbsp; <input type='text' name="uname" onChange={this.onchangeHnd} className='rounded mt-3'
          required='required'  />
          
          <br />
          <div className='passwordfiled mt-2'>
          <label className='mt-1' > Password </label>
          &nbsp; &nbsp;  <input type={this.state.passvisible ? "password" :"text"} name="password" className='pass rounded ml-1'
          onChange={this.onchangeHnd}  />
         <span>
         <FontAwesomeIcon 
            icon={ this.state.passvisible ?  faEye:faEyeSlash  }
            onClick={this.iconToggle}
         />
         </span>
         </div>
          <br />
        
          <input type="checkbox" className='ml-2 mt-3' 
            checked={this.state.check} onChange={this.cboxHandl}
          />Accept <a href='google.com'>T&C</a>
          <br />
          <input type="submit"  className='ml-2 mt-5 mb-3' disabled={this.state.disble} />
        </form>
      </div>
     </>
    )
  }
}

export default Cform