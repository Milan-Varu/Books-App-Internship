import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../login/login.css"
// import { login } from '../../service/appService';


import { Link } from 'react-router-dom';

function Login() {
  

const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [userErr, setUserErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);



  function loginhandle(e) {
    if(user.length<3 || password.length<8){
      alert("Please enter valid details");
    }else{
      alert("all good :)")
      navigate('../Booklist');
      
    }
    e.preventDefault();
  }
  
  function passwordHandler(e) {
    let item = e.target.value;
    if(item.length<8){
      setPasswordErr(true);
    }
    else{
      setPasswordErr(false);
    }
    setPassword(item);
  }

  function userHandler(e) {
    let item = e.target.value;
    if(item.length<3){
      setUserErr(true);
    }
    else{
      setUserErr(false);
    }
    setUser(item);
  }

  return (
    <div className='login'  >
      <form  className="form" onSubmit={loginhandle}>
      <h1>Login</h1>
      <div className='label'>
      <label> Username</label>
        <input type="text" placeholder='Enter your username' onChange={userHandler} /><br/>{userErr?<span>User Not Valid</span>:""}
       </div>
        <br />
        <div className='label'>
        <label> Password</label>
        <input type="password" placeholder='Enter your password' onChange={passwordHandler}/>{passwordErr?<span>password Not Valid</span>:""}
        </div>
        <br />
        <div>
        <button type='submit'>Login</button>
        <Link to ='../Registration' id='login1'> Register</Link>
        </div>

      </form >
    </div >
  )
}

export default Login;
