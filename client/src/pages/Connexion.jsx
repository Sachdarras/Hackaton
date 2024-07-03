import { Link } from "react-router-dom";
import { useState } from "react";

function Connexion() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleValidation = async () => {
    try {
      const response = await fetch(
        "http://localhost:3310/api/candidate/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (!response.ok) {
        throw new Error("Email ou mot de passe incorrect !");
      }

      setAuthenticated(true);
    } catch (error) {
      alert(error.message);
    }
  };

  if (authenticated) {
    return (
      <div>
        <p>Redirection vers le profil...</p>
        <Link to="/profil">
          <span>Accéder à votre profil</span>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Link to="/">
        <span>Retour</span>
      </Link>
      <div>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Email"
        />
      </div>
      <div>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Mot de passe"
        />
      </div>
      <button type="button" onClick={handleValidation}>
        Valider
      </button>
    </div>
  );
}

export default Connexion;
