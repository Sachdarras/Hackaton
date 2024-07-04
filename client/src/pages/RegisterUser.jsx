import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import logo from "../assets/logo.png";
import leftarrow from "../assets/Flecheleft.png";

import "../main.scss";

function RegisterUser() {
  const [name, setName] = useState("");
  const [firstname, setFirstName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [ville, setVille] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [github, setGithub] = useState("");
  const [portfolio, setPortfolio] = useState("");
  // const [photo, setPhoto] = useState("");
  const [profession, setProfession] = useState("");
  const [hardskills, setHardskills] = useState("");
  const [softskills, setSoftskills] = useState("");
  const [description, setDescription] = useState("");
  const [contrat, setContrat] = useState("");
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
      // photo,
      profession,
      hardskills,
      softskills,
      description,
      contrat,
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
    <>
      <div className="headFormUser">
        <Link to="/">
          <img className="leftarrow1" src={leftarrow} alt="leftarrow" />
        </Link>
        <img className="registerLogo" src={logo} alt="logo" />
        <Link to="/connexion">
          <button className="button-connexion" type="button">
            Connexion
          </button>
        </Link>
      </div>
      <div className="formUser">
        <h1 className="formTitle1">Je suis</h1>
        <form onSubmit={handleAddUser}>
          <div className="formPartOne">
            <div className="formGroup div1">
              <label className="formLabel" htmlFor="name">
                Nom
              </label>
              <input
                type="text"
                id="name"
                placeholder="Entrez votre nom"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="formGroup div2">
              <label className="formLabel" htmlFor="firstname">
                Prénom
              </label>
              <input
                type="text"
                id="firstname"
                placeholder="Entrez votre prénom"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="formGroup div3">
              <label className="formLabel" htmlFor="telephone">
              Téléphone
              </label>
              <input
                type="text"
                id="telephone"
                placeholder="Entrez votre numéro de téléphone"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
                required
              />
            </div>
            <div className="formGroup div4">
              <label className="formLabel" htmlFor="ville">
                Ville
              </label>
              <input
                type="text"
                id="ville"
                placeholder="Entrez le nom de votre ville"
                value={ville}
                onChange={(e) => setVille(e.target.value)}
                required
              />
            </div>
            <div className="formGroup div5">
              <label className="formLabel" htmlFor="email">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                placeholder="Entrez votre email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="formGroup div6">
              <label className="formLabel" htmlFor="password">
                Mot de passe
              </label>
              <input
                type="password"
                id="password"
                placeholder="Entrez votre mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          <div className="formGroup div7">
            <label className="formLabel" htmlFor="github">
              Lien Github
            </label>
            <input
              type="text"
              id="github"
              placeholder="Lien de votre github"
              value={github}
              onChange={(e) => setGithub(e.target.value)}
            />
          </div>
          <div className="formGroup div8">
            <label className="formLabel" htmlFor="portfolio">
              Lien Portfolio
            </label>
            <input
              type="text"
              id="portfolio"
              placeholder="Lien de votre portfolio"
              value={portfolio}
              onChange={(e) => setPortfolio(e.target.value)}
            />
          </div>
        </div>
          {/* <h1 className="formTitle1">Photo de profil</h1>
        <div className="formGroup">
          <label className="formLabel" htmlFor="photo">Avatar</label>
          <input
            type="text"
            id="photo"
            placeholder="Importer une image"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            // accept="image/png, image/jpeg, image/svg"
          />
        </div> */}
        <div className="bloc2">
          <h1 className="formTitle2">Métier et compétences</h1>
          <div className="grid2">
          <div className="formGroup">
            <label className="formLabel" htmlFor="profession">
              Votre profession
            </label>
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
            <label className="formLabel" htmlFor="hardskills">
              Hard Skills
            </label>
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
            <label className="formLabel" htmlFor="softskills">
              Soft Skills
            </label>
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
            <label className="formLabel" htmlFor="description">
              Description
            </label>
            <input
              type="text"
              id="description"
              placeholder="Une petite description ?"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          </div>
          </div>
          <div className="bloc3">
          <h1 className="formTitle3">Je recherche</h1>
          <div className="formGroup">
            <label className="formLabel" htmlFor="contrat">
              Type de contrat
            </label>
            <input
              type="text"
              id="contrat"
              placeholder="Quel type de contrat recherchez vous ?"
              value={contrat}
              onChange={(e) => setContrat(e.target.value)}
              required
            />
          </div>
          <button className="account-button" type="submit">
            Valider
          </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default RegisterUser;
