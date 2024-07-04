import { useEffect, useState } from "react";

function Profil() {
  const [candidate, setCandidate] = useState({});

  useEffect(() => {
    const loggedInCandidate = localStorage.getItem("loggedInCandidate");
    if (loggedInCandidate) {
      setCandidate(JSON.parse(loggedInCandidate));
    }
  }, []);

  if (!candidate || Object.keys(candidate).length === 0) {
    return <div>Loading...</div>;
  }

  const hardSkills = candidate.hardskills
    ? candidate.hardskills.split(", ")
    : [];
  const softSkills = candidate.softskills
    ? candidate.softskills.split(", ")
    : [];
  const typesContrat = candidate.contrat ? candidate.contrat.split(", ") : [];

  return (
    <div className="bg-profil">
      <div className="information-container">
        <ul className="ul-npl">
          {" "}
          <li>{`${candidate.name} ${candidate.surname}`}</li>
          <li>
            <img src={candidate.photo} alt="avatar" />
          </li>
          <li>{candidate.location}</li>
        </ul>
        <ul className="ul-mgp">
          <li>
            <a
              href={candidate.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href={candidate.portfolio}
              target="_blank"
              rel="noopener noreferrer"
            >
              Portfolio
            </a>
          </li>
        </ul>
      </div>

      <div className="skills-container">
        <div className="profil-tittle-container">
          <h2>Description</h2>
        </div>
        <p>{candidate.description}</p>
        <div className="profil-tittle-container">
          <h2>Métier</h2>
        </div>
        <ul>
          <li className="job-tag">{candidate.profession}</li>
        </ul>
        <div className="profil-tittle-container">
          <h2>Hard Skills</h2>
        </div>
        <ul className="skills-list">
          {hardSkills.map((skill) => (
            <li key={`hardSkill-${skill}`} className="skill-tag">
              {skill}
            </li>
          ))}
        </ul>
        <div className="profil-tittle-container">
          <h2>Soft Skills</h2>
        </div>
        <ul className="skills-list">
          {softSkills.map((skill) => (
            <li key={`softSkill-${skill}`} className="skill-tag">
              {skill}
            </li>
          ))}
        </ul>
        <div className="profil-tittle-container">
          <h2>Recherche</h2>
        </div>
        <ul className="skills-list">
          {typesContrat.map((type) => (
            <li key={`typeContrat-${type}`} className="skill-tag">
              {type.trim()}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Profil;
