import CompanyCarousel from "../components/CompanyCarousel";
import HeaderMatchs from "../components/HeaderMatchs";
import "../main.scss";

function CompaniesList() {
  return (
    <>
      <HeaderMatchs />
      <div className="background-page">
        <div className="carousel-container">
          <CompanyCarousel />
        </div>
      </div>
    </>
  );
}
export default CompaniesList;
