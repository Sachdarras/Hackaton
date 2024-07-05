import { Link } from "react-router-dom";
import "../Styles/HeaderMatchs.scss";
import logo from "../assets/images/logo.webp";

function HeaderMatchs() {
  return (
    <header className="header-matches">
      <div className="header-item">
        <Link to="/match">
          Mes matchs <span className="match-count">1</span>
        </Link>
      </div>
      <div className="header-logo">
        <Link to="/">
          <img
            src={logo}
            alt="WonderTech Logo"
            style={{
              height: "100px",
            }}
          />
        </Link>
      </div>
      <div className="header-item">
        <div className="profil-texte">
          <Link to="/profil">Mon profil</Link>
          <Link to="/profil/profilentreprise">Mon profil Entrerpise</Link>
        </div>
        <button type="button" className="logout-button">
          SE DÉCONNECTER
        </button>
      </div>
    </header>
  );
}

export default HeaderMatchs;
