import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to="/connexion">
        <button type="button">Conexion</button>
      </Link>
      <h1>Hello</h1>
    </div>
  );
}

export default Home;
