import React, { useState } from 'react'
import "./login.css"

function Login(props) {

  const {onLoginSubmit, goToSignup} = props;
  const [userId, setUserId] = useState("")
  const [password , setPassword] = useState("")
  return (
    <div>
      <div className="login_main">
        <div className="login">
          <div className="login_heading">
            <h1>Log In</h1>
          </div>
        <form onSubmit={onLoginSubmit}>
        <div className="input_box" >
            <input type="text" placeholder="Enter User Id" value={userId} onChange={(e) =>{setUserId(e.target.value)}} />
          </div>
          <div className="input_box">
            <input type="password" placeholder="Enter Password" value={password} onChange={(e) =>{setPassword(e.target.value)}}/>
          </div>
        </form>
       <input type="submit" value="Login" />
        </div>
        <div><span>Don't have an account? <a href="#" onClick={goToSignup}>Signup</a></span></div>
      </div>
      
    </div>
  )
}

export default Login