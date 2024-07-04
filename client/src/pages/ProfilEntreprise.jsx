import { useState, useEffect } from "react";

function ProfilEnterprise() {
  const [enterprise, setEnterprise] = useState(null);

  useEffect(() => {
    // Récupérer les données d'entreprise depuis localStorage
    const loggedInEnterprise = localStorage.getItem("loggedInEnterprise");
    if (loggedInEnterprise) {
      setEnterprise(JSON.parse(loggedInEnterprise));
    }
  }, []);

  if (!enterprise) {
    return <div>Loading...</div>;
  }

  const technologies = enterprise.technologie.split(", ");
  const typesContrat = enterprise.contrat.split(", ");

  return (
    <div className="profil-enterprise-container">
      <div className="enterprise-section">
        <div className="enterprise-header">
          <img src={enterprise.image} alt="logo" className="enterprise-logo" />
          <h1>{enterprise.raison_sociale}</h1>
          <p>Secteur: {enterprise.secteur}</p>
          <p>Location: {enterprise.location}</p>
          <p>SIRET: {enterprise.siret}</p>
        </div>
      </div>

      <div className="enterprise-details">
        <div className="enterprise-tags">
          <p>Poste: {enterprise.poste}</p>
          <p>Profession: {enterprise.profession}</p>
          <p>Type de contrat: {typesContrat.join(", ")}</p>
        </div>

        <div className="enterprise-technologies">
          Technologies:
          <ul className="technologies-list">
            {technologies.map((tech) => (
              <li key={tech} className="tech-tag">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="enterprise-recruiter">
        <h2>Recruteur</h2>
        <p>Nom: {enterprise.lastname}</p>
        <p>Prénom: {enterprise.firstname}</p>
        <p>Fonction: {enterprise.fonction}</p>
        <p>Téléphone: {enterprise.telephone}</p>
        <p>
          Email: <a href={`mailto:${enterprise.email}`}>{enterprise.email}</a>
        </p>
      </div>
    </div>
  );
}

export default ProfilEnterprise;
