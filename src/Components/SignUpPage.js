import React, { useState } from 'react'
import Profile from './Profile'
import { NavLink } from 'react-router-dom'
const SignUpPage = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    function handleClick (e) {
        e.preventDefault();
        if(password !== confirmPassword){
            alert('Password and confirm password does not match')
        }
        else{
            window.location.href += 'profile'
            // <Profile name={name} email={email} password={password} confirmPassword={confirmPassword} />
        }
    }


  return (
    <div className="signup-page">
      <h1>SignUp</h1>
      <form>
        <input
          type="text"
          placeholder="Full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <input
          type="password"
          placeholder="confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <br />
        <p id="error-message">All fields are mandetory</p>
        <p id="success-message">Signup Successfull</p>
        <NavLink id='btn' onClick={handleClick}>Sign Up</NavLink>
      </form>
    </div>
  );
}

export default SignUpPage