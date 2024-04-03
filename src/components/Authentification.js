import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Pour la redirection

function Authentification() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const navigate = useNavigate();

  const handleSubmit = (event) => {
    // event.preventDefault();
    // console.log('Login avec :', email, password);
    // navigate('/Browse'); 
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2>Connexion</h2>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Mot de passe</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Se connecter</button>
        <button type="submit">Se connecter</button>
        {/* <button type="button" onClick={() => navigate('/signup')}>Créer un compte</button> */}
      </form>
    </div>
  );
}

export default Authentification;
