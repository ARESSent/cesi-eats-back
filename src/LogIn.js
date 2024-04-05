import React, { useState } from 'react';
import { Api } from './components/Api';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    setError('');

    try {
      const success = await Api.login(email, password);
      if (success) {
        alert('Login successful!');
      } else {
        setError('Incorrect credentials');
      }
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);
      } else {
        setError('Connection failed. Please try again later.');
      }
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default LogIn;