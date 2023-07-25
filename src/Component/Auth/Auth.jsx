
import Signup from './SignUp/Signup'
import vide from "../../loginbg.mp4";

import "./Auth.css"
import Login from './Login/Login'
import React, { useState } from 'react';
const Auth = () => {
  const [login,setLogin]=useState(true);
  const [showSendingModal, setShowSendingModal] = useState(false);

  const loginHandler = ()=>{
    setLogin(true);
  }
   const signHandler = ()=>{
    setLogin(false);
  }
    
    return (
   <React.Fragment>
    <div className="video-background">
  <video autoPlay muted loop>
    <source src={vide} type="video/mp4" />
  
  </video>
  <div className="d-flex justify-content-center align-items-center flex-column" style={{ height: '100vh' }}>
    <div className='auth-Toggle'>
      <span className={login ? "auth-login active" : "auth-login"} onClick={loginHandler}>Login</span>
      <span className={!login ? "auth-signup active" : "auth-signup"} onClick={signHandler}>Signup</span>
    </div>
    {!login && <Signup signup={loginHandler} showModal={setShowSendingModal}></Signup>}
    {login && <Login login={signHandler} showModal={setShowSendingModal}></Login>}


    {showSendingModal && <div className='Auth-load-modal'>
      <div class="Auth-loader"></div>
      </div>}
  </div>

</div>

    </React.Fragment>

  )
}

export default Auth
