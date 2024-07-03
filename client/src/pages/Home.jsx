import { Link } from "react-router-dom";
import { useState } from "react";
import "../main.scss";

function Home() {
  const [role, setRole] = useState("");

  const handleValidation = () => {
    if (role === "professionnelle") {
      return "/registeruser";
    }
    if (role === "employeur") {
      return "/registercompany";
    }

    alert("Veuillez sélectionner une option.");
    return null;
  };

  const handleButtonClick = () => {
    const path = handleValidation();
    if (path) {
      window.location.href = path;
    }
  };

  return (
    <>
      <div className="buttonconnexion-container">
        <Link to="/connexion">
          <button className="button-connexion" type="button">
            Connexion
          </button>
        </Link>
      </div>
      <div className="home-container">
        <div className="tittle-container1">
          <h1>Recrutez</h1>
        </div>
        <div className="tittle-container2">
          <h1>Une WonderTech dès maintenant</h1>
        </div>
        <div className="tittle-container3">
          <h2>Je suis</h2>
        </div>
        <div className="radio-container">
          <label>
            <input
              type="radio"
              id="professionnelle"
              name="role"
              value="professionnelle"
              checked={role === "professionnelle"}
              onChange={() => setRole("professionnelle")}
            />
            Une professionnelle
          </label>

          <label>
            <input
              type="radio"
              id="employeur"
              name="role"
              value="employeur"
              checked={role === "employeur"}
              onChange={() => setRole("employeur")}
            />
            Un employeur
          </label>
        </div>
        <button
          className="valide-button"
          type="button"
          onClick={handleButtonClick}
        >
          Valider
        </button>
      </div>
    </>
  );
}

export default Home;
