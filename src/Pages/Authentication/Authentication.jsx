import React, { useState } from 'react'
import Login from '../../Components/Login/Login.jsx'
import Signup from '../../Components/Signup/Signup.jsx'


function Authentication() {

  const [showSignup ,setShowSignup] = useState(false)
  const handleLoginSubmit = () =>{

  }
  const handleSignupSubmit = () =>{}
  const goToSignup = () =>{
    setShowSignup(true);
  }
  const goToLogin = () =>{
    setShowSignup(false);
  }
  return (
    <div>
      {showSignup ? <Signup onSignupSubmit={handleSignupSubmit} goToLogin={goToLogin} /> 
      :(<Login onLoginSubmit={handleLoginSubmit} goToSignup={goToSignup}/>)
      }
        </div>
  )
}

export default Authentication
