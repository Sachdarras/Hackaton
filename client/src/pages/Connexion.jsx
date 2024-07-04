import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Connexion() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

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

      const candidate = await response.json();
      // Stocker les informations du candidat dans localStorage
      localStorage.setItem("loggedInCandidate", JSON.stringify(candidate));
      navigate("/profil"); // Rediriger vers la page de profil après connexion
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <Link to="/">
        <span>Retour</span>
      </Link>
      <div className="connexion-container">
        <div className="form-container">
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
          <button
            className="button-validate-co"
            type="button"
            onClick={handleValidation}
          >
            Valider
          </button>
        </div>
      </div>
    </div>
  );
}

export default Connexion;
