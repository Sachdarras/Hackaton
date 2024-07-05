import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";
import leftarrow from "../assets/Flecheleft.png";

function Connexion() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("candidate"); // Par défaut, connexion pour les candidats
  const navigate = useNavigate();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleValidation = async () => {
    try {
      let loginUrl = "";
      if (userType === "candidate") {
        loginUrl = "http://localhost:3310/api/candidate/login";
      } else if (userType === "enterprise") {
        loginUrl = "http://localhost:3310/api/entreprise/login";
      }

      const response = await fetch(loginUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Email ou mot de passe incorrect !");
      }

      const userData = await response.json();
      const storageKey =
        userType === "candidate" ? "loggedInCandidate" : "loggedInEnterprise";
      localStorage.setItem(storageKey, JSON.stringify(userData));

      if (userType === "candidate") {
        navigate("/companies");
      } else if (userType === "enterprise") {
        navigate("/users");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="connexion-container">
      <Link to="/">
        <img className="leftarrow" src={leftarrow} alt="leftarrow" />
      </Link>
      <div className="logo-container">
        <img src={logo} alt="logo" />
      </div>
      <div className="form-container">
        <input
          className="form-input"
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Email"
        />
        <input
          className="form-input
          "
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Mot de passe"
        />
        <div className="radio-container">
          <label>
            <input
              className="radio-input"
              type="radio"
              name="userType"
              value="candidate"
              checked={userType === "candidate"}
              onChange={(e) => setUserType(e.target.value)}
            />
            Candidate
          </label>
          <label>
            <input
              className="radio-input"
              type="radio"
              name="userType"
              value="enterprise"
              checked={userType === "enterprise"}
              onChange={(e) => setUserType(e.target.value)}
            />
            Entreprise
          </label>
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
  );
}

export default Connexion;
