import React from 'react'
import { NavLink } from 'react-router-dom';

const Profile = () => {
  return (
    <div className="profile-page">
      <h1>SignUp SuccessFull</h1>
      <h1>Profile</h1>
      <h3>Full Name: <span></span></h3>
      <h3>Email: <span></span></h3>
      <h3>Password: <span></span></h3>
      <NavLink id='logout-btn' to={'/'}>Logout</NavLink>
    </div>
  );
}

export default Profile