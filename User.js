import React, { useState } from 'react';

const User = () => {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validateEmail(email);
    setIsValidEmail(isValid);

    if (isValid) {
      // Perform any action you want when the email is valid
      console.log('Email is valid:', email);
    } else {
      // Perform any action you want when the email is not valid
      console.log('Email is not valid:', email);
    }
  };

  return (
    <div>
      <h2>User Component</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {isValidEmail !== undefined && (
        <p>{isValidEmail ? 'Email is valid' : 'Email is not valid'}</p>
      )}
    </div>
  );
};

export default User;