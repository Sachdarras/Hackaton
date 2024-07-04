import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Connexion() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("candidate");
  const navigate = useNavigate();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleUserTypeChange = (e) => setUserType(e.target.value);

  const handleValidation = async () => {
    try {
      const apiUrl = "http://localhost:3310/api/";
      const endpoint =
        userType === "entreprise" ? "entreprise/login" : "candidate/login";

      const response = await fetch(`${apiUrl}${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Email ou mot de passe incorrect !");
      }

      if (userType === "candidate") {
        navigate("/profil");
      } else if (userType === "entreprise") {
        navigate("/profilentreprise");
      }
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
            <select value={userType} onChange={handleUserTypeChange}>
              <option value="candidate">Candidat</option>
              <option value="entreprise">Entreprise</option>
            </select>
          </div>
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
