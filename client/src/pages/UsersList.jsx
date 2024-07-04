import UserCarousel from "../components/UserCarousel";
import HeaderMatchs from "../components/HeaderMatchs";
import "../main.scss";

function UsersList() {
  return (
    <>
      <HeaderMatchs />
      <div className="background-page">
        <div className="carousel-container">
          <UserCarousel />
        </div>
      </div>
    </>
  );
}

export default UsersList;
