import React, { useState } from 'react'

import "./signup.css"

function Signup(props) {

  const {onSignupSubmit, goToLogin} = props;
  const [userId , setUserId] = useState("")
  const [password, setPassword] = useState("")
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")

  return (
    <div>
    <div className="signup_main">
        <div className="signup">
          <div className="signup_heading">
            <h1>Register</h1>
          </div>
     <form onSubmit={onSignupSubmit}>
     
      
          <div className="input_box" >
            <input type="text" placeholder="Enter User Id" value={userId} onChange={(e)=>{setUserId(e.target.value);}} />
          </div>
          
          <div className="input_box" >
            <input type="password" placeholder="Enter Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
          </div>
          <div className="input_box" >
            <input type="text" placeholder="Enter User Name" value={userName} onChange={(e)=>{setUserName(e.target.value);}}/>
          </div>
          <div className="input_box" >
            <input type="email" placeholder="Enter User email" value={email} onChange={(e)=>{setEmail(e.target.value)}}  />
          </div>
      
     </form>
        <input type="submit" value="Register" />
        </div>
        <div><span>Alredy have an account? Please <a href="#" onClick={goToLogin}>Login</a></span></div>
      </div>
    </div>
  )
}

export default Signup
