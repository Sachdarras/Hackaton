import { useEffect, useState } from "react";

function Profil() {
  const [candidate, setCandidate] = useState(null);

  useEffect(() => {
    const loggedInCandidate = localStorage.getItem("loggedInCandidate");
    if (loggedInCandidate) {
      setCandidate(JSON.parse(loggedInCandidate));
    }
  }, []);

  if (!candidate) {
    return <div>Loading...</div>;
  }

  const hardSkills = candidate.hardskills.split(", ");
  const softSkills = candidate.softskills.split(", ");
  const typesContrat = candidate.contrat.split(", ");

  return (
    <>
      <div className="information-container">
        <ul>
          <li>
            <img src={candidate.photo} alt="avatar" />
          </li>
          <li>{`${candidate.name} ${candidate.surname}`}</li>
          <li>{candidate.location}</li>
          <li>{candidate.mobile}</li>
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
        <h2>Description</h2>
        <p>{candidate.description}</p>
        <h2>Métier</h2>
        <ul>
          <li className="job-tag">{candidate.profession}</li>
        </ul>
        <h2>Hard Skills</h2>
        <ul className="skills-list">
          {hardSkills.map((skill) => (
            <li key={`hardSkill-${skill}`} className="skill-tag">
              {skill}
            </li>
          ))}
        </ul>
        <h2>Soft Skills</h2>
        <ul className="skills-list">
          {softSkills.map((skill) => (
            <li key={`softSkill-${skill}`} className="skill-tag">
              {skill}
            </li>
          ))}
        </ul>
        <h2>Recherche</h2>
        <ul className="skills-list">
          {typesContrat.map((type) => (
            <li key={`typeContrat-${type}`} className="skill-tag">
              {type.trim()}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Profil;
