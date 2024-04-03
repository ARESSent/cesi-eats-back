import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Pour la redirection

function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  // Gestion de la soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault();
    if(password !== confirmPassword) {
      alert("Les mots de passe ne correspondent pas !");
      return;
    }
    console.log('Création de compte pour :', email, password);
    // Ajouter ici la logique pour créer le compte
    navigate('/'); // Redirige vers la page de connexion après l'inscription
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit}>
        <h2>Création de compte</h2>
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
        <div>
          <label>Confirmez le mot de passe</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
}

export default SignupPage;
