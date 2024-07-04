/* eslint-disable react/prop-types */
import "../Styles/CompanyCard.scss";
import companyCardBG from "../assets/images/card-entreprise.webp";

function CompanyCard({ company }) {
  return (
    <div
      className="company-card"
      style={{
        backgroundImage: `url(${companyCardBG})`,
        width: "300px",
        height: "400px",
      }}
    >
      <div className="company-card-header">
        <div className="company-card-body">
          <h3>{company.raisonSociale}</h3>
          <p>{company.secteur}</p>
        </div>
        <img
          className="company-logo"
          src={company.image}
          alt={company.raisonSociale}
        />
      </div>
    </div>
  );
}

export default CompanyCard;
