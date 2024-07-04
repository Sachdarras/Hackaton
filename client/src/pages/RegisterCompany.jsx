import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import "../main.scss";

function RegisterCompany() {
  const [image, setImage] = useState("");
  const [raisonSociale, setRaisonSociale] = useState("");
  const [location, setLocation] = useState("");
  const [secteur, setSecteur] = useState("");
  const [siret, setSiret] = useState("");
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [fonction, setFonction] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [technologie, setTechnologie] = useState("");
  const [profession, setProfession] = useState("");
  const [contrat, setContrat] = useState("");
  const [poste, setPoste] = useState("");

  const handleAddCompany = async (e) => {
    e.preventDefault();

    const NewCompany = {
      image,
      raisonSociale,
      location,
      secteur,
      siret,
      lastname,
      firstname,
      fonction,
      telephone,
      email,
      password,
      technologie,
      profession,
      contrat,
      poste,
    };

    try {
      // Appel à l'API pour créer un nouvel utilisateur (entreprise)
      await axios.post(`http://localhost:3310/api/entreprise`, NewCompany, {
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
      <div className="headFormCompany">
        <Link to="/">
          <span>Retour</span>
        </Link>
        <img src="#" alt="logo" />
        <Link to="/connexion">
          <button className="button-connexion" type="button">
            Connexion
          </button>
        </Link>
      </div>
      <div className="formCompany">
        <h1 className="formTitle">Nous sommes</h1>
        <form onSubmit={handleAddCompany}>
          <div className="formGroup">
            <label className="formLabel" htmlFor="image">
              Image
            </label>
            <input
              type="text"
              id="image"
              placeholder="Importer une image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <div className="formGroup">
            <label className="formLabel" htmlFor="raisonSociale">
              Raison sociale
            </label>
            <input
              type="text"
              id="raisonSociale"
              placeholder="Raison sociale de l'entreprise"
              value={raisonSociale}
              onChange={(e) => setRaisonSociale(e.target.value)}
              required
            />
          </div>
          <div className="formGroup">
            <label className="formLabel" htmlFor="location">
              Ville
            </label>
            <input
              type="text"
              id="location"
              placeholder="Nom de la ville"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>
          <div className="formGroup">
            <label className="formLabel" htmlFor="secteur">
              Secteur d'activité
            </label>
            <input
              type="text"
              id="secteur"
              placeholder="Quel est votre secteur d'activité"
              value={secteur}
              onChange={(e) => setSecteur(e.target.value)}
              required
            />
          </div>
          <div className="formGroup">
            <label className="formLabel" htmlFor="siret">
              N°Siret
            </label>
            <input
              type="number"
              id="siret"
              placeholder="Entrez votre N°Siret"
              value={siret}
              onChange={(e) => setSiret(e.target.value)}
              required
            />
          </div>
          <h1 className="formTitle">Contact</h1>
          <div className="formGroup">
            <label className="formLabel" htmlFor="lastname">
              Nom
            </label>
            <input
              type="text"
              id="lastname"
              placeholder="Entrez votre nom"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              required
            />
          </div>
          <div className="formGroup">
            <label className="formLabel" htmlFor="firstname">
              Prénom
            </label>
            <input
              type="text"
              id="firstname"
              placeholder="Entrez votre prénom"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              required
            />
          </div>
          <div className="formGroup">
            <label className="formLabel" htmlFor="fonction">
              Fonction
            </label>
            <input
              type="text"
              id="fonction"
              placeholder="Votre fonction dans l'entreprise"
              value={fonction}
              onChange={(e) => setFonction(e.target.value)}
              required
            />
          </div>
          <h1 className="formTitle">Photo de profil</h1>
          <div className="formGroup">
            <label className="formLabel" htmlFor="telephone">
              Téléphone
            </label>
            <input
              type="text"
              id="telephone"
              placeholder="Entrez votre n° de téléphone"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
              required
            />
          </div>
          <div className="formGroup">
            <label className="formLabel" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Entrez votre adresse email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="formGroup">
            <label className="formLabel" htmlFor="password">
              Mot de passe
            </label>
            <input
              type="password"
              id="password"
              placeholder="Entrez un mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <h1 className="formTitle">Nous utilisons</h1>
          <div className="formGroup">
            <label className="formLabel" htmlFor="technologie">
              Technologie
            </label>
            <input
              type="text"
              id="technologie"
              placeholder="Sur quels technologies travaillez vous ?"
              value={technologie}
              onChange={(e) => setTechnologie(e.target.value)}
              required
            />
          </div>
          <div className="formGroup">
            <label className="formLabel" htmlFor="profession">
              Métier
            </label>
            <input
              type="text"
              id="profession"
              placeholder="Quel type de métier cherchez vous ?"
              value={profession}
              onChange={(e) => setProfession(e.target.value)}
              required
            />
          </div>
          <h1 className="formTitle">Nous recherchons</h1>
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
          <div className="formGroup">
            <label className="formLabel" htmlFor="poste">
              Type de poste
            </label>
            <input
              type="text"
              id="poste"
              placeholder="Quel type de poste recherchez vous ?"
              value={poste}
              onChange={(e) => setPoste(e.target.value)}
              required
            />
          </div>
          <button className="account-button" type="submit">
            Valider
          </button>
        </form>
      </div>
    </>
  );
}

export default RegisterCompany;
