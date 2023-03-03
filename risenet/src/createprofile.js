import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Createprofile.css';

const CreateProfile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = e => {
    setPhone(e.target.value);
  };

  return (
    <div className="profile-container">
      <h2>Create Profile !</h2>
      <form className="profile-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={handleNameChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" value={phone} onChange={handlePhoneChange} />
        </div>
        <Link to="/home">
        <button type="submit">Save</button>
        </Link>
      </form>
    </div>
  );
};

export default CreateProfile;
