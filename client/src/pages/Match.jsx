import Nav from "../components/Nav";

function Match() {
  const entreprise = {
    image: "https://companieslogo.com/img/128/MC.PA-db2b6829.png?t=1633207758",
    raison_sociale: "LVMH",
    location: "Raymond-les-Bains",
    secteur: "Chimie",
    telephone: "3105903913",
    email: "lvmh@email.fr",
    technologie: "Go, React, Kubernetes, Pandas, Vue.js",
    profession: "Manager Data",
    contrat: "Alternance",
    poste: "Administrateur réseau",
  };

  const renderEntrepriseDetails = () => {
    const details = Object.entries(entreprise).filter(
      ([key]) => key !== "image"
    );

    return (
      <div>
        <h1>Mes Matchs</h1>
        <img
          className="logo-entreprise"
          src={entreprise.image}
          alt="logoentreprise"
        />
        <ul>
          {details.map(([key, value]) => (
            <li key={key}>
              <strong>{key.replace("_", " ")}</strong>: {value}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <>
      <Nav />
      <div className="card-container-match">
        {renderEntrepriseDetails()}
        <button className="contact-me" type="button">
          Contacter
        </button>
      </div>
    </>
  );
}

export default Match;
