function Profil() {
  const candidate = {
    firstName: "Bridget",
    lastName: "Stark",
    jobTitle: "Developer",
    email: "Bridget.Stark@gmail.com",
    available: false,
    avatarUrl:
      "https://api.dicebear.com/9.x/pixel-art/svg?seed=7ZG6dL&hair=long04,short01,long03,short05,long01",
    website: "http://jimenez.info/",
    password: "bCv6tz+'",
    skills: "HTML, Pandas, Node.js",
    description:
      "Full-stack Developer with a passion for creating robust web applications. Experienced in front-end and back-end development using technologies such as JavaScript, Python, and Java.",
    ville: "Paris",
    age: 30,
    job: "Developer",
    hardSkills: ["HTML", "Pandas", "Node.js"],
    softSkills: ["Communication", "Teamwork", "Problem Solving"],
    recherche: ["CDD", "Remote"],
  };

  return (
    <>
      <div className="information-container">
        <ul>
          <li>
            <img src={candidate.avatarUrl} alt="avatar" />
          </li>
          <li>{`${candidate.firstName} ${candidate.lastName}`}</li>
          <li>{candidate.ville}</li>
          <li>{candidate.age} ans</li>
        </ul>
      </div>
      <div className="skills-container">
        <h2>Description</h2>
        <p>{candidate.description}</p>
        <h2>Métier</h2>
        <ul>
          <li className="job-tag">{candidate.job}</li>
        </ul>
        <h2>Hard Skills</h2>
        <ul className="skills-list">
          {candidate.hardSkills.map((skill) => (
            <li key={skill} className="skill-tag">
              {skill}
            </li>
          ))}
        </ul>
        <h2>Soft Skills</h2>
        <ul className="skills-list">
          {candidate.softSkills.map((skill) => (
            <li key={skill} className="skill-tag">
              {skill}
            </li>
          ))}
        </ul>
        <h2>Recherche</h2>
        <ul className="skills-list">
          {candidate.recherche.map((type) => (
            <li key={type} className="skill-tag">
              {type}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Profil;
