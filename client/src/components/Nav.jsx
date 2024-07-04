import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="Nav-container">
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <img alt="logo" />
          </li>
          <li>
            <Link to="/profil">Mon profil</Link>
          </li>
          <li>
            <Link to="/match">Mes Matchs</Link>
          </li>
          <li>
            <Link to="/">Se déconnecter</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
