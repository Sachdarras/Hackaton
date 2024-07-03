import { useState } from "react";
import axios from "axios";

function RegisterUser() {
  const [name, setName] = useState("");
  const [firstname, setFirstName] = useState("");
  const [profession, setProfession] = useState("");
  const [email, setEmail] = useState("");
  const [mentor] = useState(0);
  const [photo, setPhoto] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [password, setPassword] = useState("");
  const [skills, setSkills] = useState("");
  const [description, setDescription] = useState("");

  const handleAddUser = async (e) => {
    e.preventDefault();

    const NewUser = {
      name,
      firstname,
      profession,
      email,
      mentor,
      photo,
      portfolio,
      password,
      skills,
      description,
    };

    try {
      // Appel à l'API pour créer un nouvel utilisateur
      await axios.post(`http://localhost:3310/api/candidate`, NewUser, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error(
        "Erreur lors de la création du compte : ",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <form className="formUser" onSubmit={handleAddUser}>
      <div className="formGroup">
        <label htmlFor="name">Nom</label>
        <input
          type="text"
          id="name"
          placeholder="Entrez votre nom"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="formGroup">
        <label htmlFor="firstname">Prénom</label>
        <input
          type="text"
          id="firstname"
          placeholder="Entrez votre prénom"
          value={firstname}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>
      <div className="formGroup">
        <label htmlFor="portfolio">Portfolio</label>
        <input
          type="text"
          id="portfolio"
          placeholder="Lien de votre portfolio"
          value={portfolio}
          onChange={(e) => setPortfolio(e.target.value)}
        />
      </div>
      <div className="formGroup">
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          placeholder="Entrez votre email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="formGroup">
        <label htmlFor="password">Mot de passe</label>
        <input
          type="password"
          id="password"
          placeholder="Entrez votre mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="formGroup">
        <label htmlFor="photo">Avatar</label>
        <input
          type="text"
          id="photo"
          placeholder="Importer une image"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
          // accept="image/png, image/jpeg, image/svg"
        />
      </div>
      <div className="formGroup">
        <label htmlFor="profession">Votre profession</label>
        <input
          type="text"
          id="profession"
          placeholder="Quel est votre profession ?"
          value={profession}
          onChange={(e) => setProfession(e.target.value)}
          required
        />
      </div>
      <div className="formGroup">
        <label htmlFor="skills">Hard and soft Skills</label>
        <input
          type="text"
          id="skills"
          placeholder="Quels sont vos skills ?"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          required
        />
      </div>
      <div className="formGroup">
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          placeholder="Une petite description ?"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button className="account-button" type="submit">
        Valider
      </button>
    </form>
  );
}

export default RegisterUser;
