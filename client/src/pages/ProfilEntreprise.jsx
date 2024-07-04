import { useEffect, useState } from "react";

function ProfilEnterprise() {
  const [enterprise, setEnterprise] = useState(null);

  useEffect(() => {
    // Récupérer les données d'entreprise depuis localStorage
    const loggedInEnterprise = localStorage.getItem("loggedInEnterprise");
    if (loggedInEnterprise) {
      setEnterprise(JSON.parse(loggedInEnterprise));
    }
  }, []);

  if (!enterprise || Object.keys(enterprise).length === 0) {
    return <div>Loading...</div>;
  }

  const technologies = enterprise.technologie
    ? enterprise.technologie.split(", ")
    : [];
  const typesContrat = enterprise.contrat ? enterprise.contrat.split(", ") : [];
  const handleContactClick = () => {
    window.location.href = `mailto:${enterprise.email}`;
  };
  return (
    <div className="enterprise-container">
      <div className="enterprise-information">
        <ul className="enterprise-ul">
          <li>{enterprise.raison_sociale}</li>
          <li>
            <img
              src={enterprise.image}
              alt="logo"
              className="enterprise-logo"
            />
          </li>
          <li>{` ${enterprise.secteur}`}</li>
          <li>{` ${enterprise.location}`}</li>
        </ul>
      </div>

      <div className="enterprise-skills">
        <div className="enterprise-section">
          <h2>Poste</h2>
        </div>
        <ul>
          <li className="enterprise-job">{enterprise.poste}</li>
        </ul>

        <div className="enterprise-section">
          <h2>Type de contrat</h2>
        </div>
        <ul className="enterprise-skills-list">
          {typesContrat.map((type) => (
            <li key={`typeContrat-${type}`} className="enterprise-skill-tag">
              {type.trim()}
            </li>
          ))}
        </ul>

        <div className="enterprise-section">
          <h2>Technologies</h2>
        </div>
        <ul className="enterprise-skills-list">
          {technologies.map((tech) => (
            <li key={`tech-${tech}`} className="enterprise-skill-tag">
              {tech}
            </li>
          ))}
        </ul>

        <div className="enterprise-section">
          <h2>Recruteur</h2>
        </div>
        <ul className="enterprise-recruiter">
          <li>{` ${enterprise.lastname}`}</li>
          <li>{` ${enterprise.firstname}`}</li>
          <li>{` ${enterprise.fonction}`}</li>
          <li>{` ${enterprise.telephone}`}</li>
          <li>
            <button
              type="button"
              className="contact-button"
              onClick={handleContactClick}
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProfilEnterprise;
