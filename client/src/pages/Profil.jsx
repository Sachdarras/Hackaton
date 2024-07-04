function Profil() {
  const candidate = {
    Name: "Bridget",
    Surname: "Stark",
    Profession: "Developer",
    Email: "Bridget.Stark@gmail.com",
    Mobile: "471 582 3007",
    Mentor: true,
    Photo:
      "https://res.cloudinary.com/dxzcuuil8/image/upload/v1720033898/Hackathon3/candidates_comics/tzqrdwa3vucb13zgaqxs.webp",
    Portfolio: "https://www.bell.net/",
    Password: "m-vrKU[k",
    HardSkills: "Vue.js, Go, Linux, Pandas, Kotlin",
    Description:
      "Développeur Full-stack passionné par la création d'applications web robustes. Expérimenté en développement front-end et back-end utilisant des technologies telles que JavaScript, Python et Java.",
    Location: "Saint Deniseboeuf",
    GitHub: "https://github.com/bridget.stark",
    SoftSkills: "Prise de parole en public, Communication, Pensée stratégique",
    Contrat: "CDD, Freelance, CDI",
  };

  const hardSkills = candidate.HardSkills.split(", ");
  const softSkills = candidate.SoftSkills.split(", ");
  const typesContrat = candidate.Contrat.split(", ");

  return (
    <>
      <div className="information-container">
        <ul>
          <li>
            <img src={candidate.Photo} alt="avatar" />
          </li>
          <li>{`${candidate.Name} ${candidate.Surname}`}</li>
          <li>{candidate.Location}</li>
          <li>{candidate.Mobile}</li>
          <li>
            <a
              href={candidate.GitHub}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href={candidate.Portfolio}
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
        <p>{candidate.Description}</p>
        <h2>Métier</h2>
        <ul>
          <li className="job-tag">{candidate.Profession}</li>
        </ul>
        <h2>Hard Skills</h2>
        <ul className="skills-list">
          {hardSkills.map((skill) => (
            <li key={skill} className="skill-tag">
              {skill}
            </li>
          ))}
        </ul>
        <h2>Soft Skills</h2>
        <ul className="skills-list">
          {softSkills.map((skill) => (
            <li key={skill} className="skill-tag">
              {skill}
            </li>
          ))}
        </ul>
        <h2>Recherche</h2>
        <ul className="skills-list">
          {typesContrat.map((type) => (
            <li key={type.trim()} className="skill-tag">
              {type.trim()}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Profil;
