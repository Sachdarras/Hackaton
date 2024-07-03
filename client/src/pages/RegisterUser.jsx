import { useState } from "react";
import axios from "axios";

function RegisterUser() {
  const [name, setName] = useState("");
  const [firstname, setFirstName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [ville, setVille] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [github, setGithub] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [photo, setPhoto] = useState("");
  const [profession, setProfession] = useState("");
  const [hardskills, setHardskills] = useState("");
  const [softskills, setSoftskills] = useState("");
  const [description, setDescription] = useState("");
  const [contrat, setContrat] = useState("");
  const [poste, setPoste] = useState("");
  const [mentor] = useState(0);

  const handleAddUser = async (e) => {
    e.preventDefault();

    const NewUser = {
      name,
      firstname,
      telephone,
      ville,
      email,
      password,
      github,
      portfolio,
      photo,
      profession,
      hardskills,
      softskills,
      description,
      contrat,
      poste,
      mentor,
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
        <label htmlFor="telephone">Numéro de Téléphone</label>
        <input
          type="text"
          id="telephone"
          placeholder="Entrez votre numéro de téléphone"
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
          required
        />
      </div>
      <div className="formGroup">
        <label htmlFor="ville">Ville</label>
        <input
          type="text"
          id="ville"
          placeholder="Entrez le nom de votre ville"
          value={ville}
          onChange={(e) => setVille(e.target.value)}
          required
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
        <label htmlFor="github">Lien Github</label>
        <input
          type="text"
          id="github"
          placeholder="Lien de votre github"
          value={github}
          onChange={(e) => setGithub(e.target.value)}
          required
        />
      </div>
      <div className="formGroup">
        <label htmlFor="portfolio">Lien Portfolio</label>
        <input
          type="text"
          id="portfolio"
          placeholder="Lien de votre portfolio"
          value={portfolio}
          onChange={(e) => setPortfolio(e.target.value)}
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
        <label htmlFor="hardskills">Hard Skills</label>
        <input
          type="text"
          id="hardskills"
          placeholder="Quels sont vos Hard skills ?"
          value={hardskills}
          onChange={(e) => setHardskills(e.target.value)}
          required
        />
      </div>
      <div className="formGroup">
        <label htmlFor="softskills">Soft Skills</label>
        <input
          type="text"
          id="softskills"
          placeholder="Quels sont vos Soft skills ?"
          value={softskills}
          onChange={(e) => setSoftskills(e.target.value)}
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
      <div className="formGroup">
        <label htmlFor="contrat">Type de contrat</label>
        <input
          type="text"
          id="contrat"
          placeholder="Type de contrat recherché"
          value={contrat}
          onChange={(e) => setContrat(e.target.value)}
          required
        />
      </div>
      <div className="formGroup">
        <label htmlFor="poste">Type de poste</label>
        <input
          type="text"
          id="poste"
          placeholder="Type de poste"
          value={poste}
          onChange={(e) => setPoste(e.target.value)}
          required
        />
      </div>
      <button className="account-button" type="submit">
        Valider
      </button>
    </form>
  );
}

export default RegisterUser;
