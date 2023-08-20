import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import "../css/style.css";
import "../registration/registration.css"

const Registration = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [emailErr, setEmailErr] = useState(false);
  const [usernameErr, setUsernameErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  const [confirmPasswordErr, setConfirmPasswordErr] = useState(false);
  const [role, setRole] = useState("seller"); // Default value is "seller"

  function handleback(e) {
    navigate('/Login');
  }

  function fnHandler(e) {
    setFirstName(e.target.value);
  };

  function lnHandler(e) {
    setLastName(e.target.value);
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
    setEmailErr(false);
  };

  const userHandler = (e) => {
    setUsername(e.target.value);
    setUsernameErr(false);
  };

  const passHandler = (e) => {
    setPassword(e.target.value);
    setPasswordErr(false);
  };

  const cpassHandler = (e) => {
    const confirmPasswordInput = e.target.value;
    setConfirmPassword(confirmPasswordInput);
    if (confirmPasswordInput !== password) {
      setConfirmPasswordErr(true);
    } else {
      setConfirmPasswordErr(false);
    }
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !firstName ||
      !lastName ||
      !email ||
      emailErr ||
      !username ||
      usernameErr ||
      !password ||
      !confirmPassword ||
      password !== confirmPassword
    ) {
      alert("Please enter valid details");
    } else {
      alert("All good :)");
      // Perform registration here or any other actions after successful validation
    }
  };

    // Navigate to the User component with registered user data
    const userData = {
      firstName,
      lastName,
      role,
      email,
      username,
    };
    navigate(`/user?userData=${JSON.stringify(userData)}`);
  

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h1>Registration Form</h1>
        <div className='label'>
          <label> First Name</label>
          <input type="text" placeholder='Enter First Name' onChange={fnHandler} />
        </div>
        
        <div className='label'>
          <label>Last Name</label>
          <input type="text" placeholder='Enter Last Name' onChange={lnHandler} />
        </div>
        <br />

        <div className='label'>
          <label>Email</label>
          <input type="text" placeholder='Enter Email Address' onChange={emailHandler} />{emailErr ? <span>email is Not Valid</span> : ""}
        </div>
        <br />

        <div className=' label label1'>
          <label>Role</label>
          <select value={role} onChange={handleRoleChange}>
            <option value="seller">Seller</option>
            <option value="buyer">Buyer</option>
          </select>
        </div>

        <div className='label'>
          <label> Set Username</label>
          <input type="text" placeholder='Choose valid Username' onChange={userHandler} />{usernameErr ? <span>User Not Valid</span> : ""}
        </div>
        <br />

        <div className='label'>
          <label>Password</label>
          <input type="text" placeholder='enter 8 digit password' onChange={passHandler} />{passwordErr ? <span>User Not Valid</span> : ""}
        </div>
        <br />

        <div className='label'>
          <label>Confirm Password</label>
          <input type="text" placeholder='Confirm Password' onChange={cpassHandler} />{confirmPasswordErr ? <span>confirm password Not same</span> : ""}
        </div>
        {/* <br /> */}

        <div>
          
          <button type='button'>submit</button>
          <button type='button' onClick={handleback}>Back to Login</button>
        </div>

      </form>
    </div>
  )
}

export default Registration;
