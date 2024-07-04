/* eslint-disable react/prop-types */
import "../Styles/CompanyCard.scss";
import companyCardBG from "../assets/images/card-entreprise.webp";

function CompanyCard({ company }) {
  return (
    <div
      className="company-card"
      style={{ backgroundImage: `url(${companyCardBG})` }}
    >
      <div className="company-card-header">
        <img
          className="company-logo"
          src={company.image}
          alt={company.raisonSociale}
        />
      </div>
      <div className="company-card-body">
        <h3>{company.raisonSociale}</h3>
        <p>{company.secteur}</p>
      </div>
    </div>
  );
}

export default CompanyCard;
