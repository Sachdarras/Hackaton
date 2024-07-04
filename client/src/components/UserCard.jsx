/* eslint-disable react/prop-types */
import "../Styles/UserCard.scss";
import userCardBG from "../assets/images/card-pro.webp";

function UserCard({ user }) {
  return (
    <div
      className="user-card"
      style={{
        backgroundImage: `url(${userCardBG})`,
        width: "300px",
        height: "400px",
      }}
    >
      <div className="user-card-header">
        <div>
          <h3>
            {user.name} {user.surname}
          </h3>
          <p>{user.profession}</p>
        </div>
        <img className="user-photo" src={user.photo} alt={user.name} />
      </div>
    </div>
  );
}

export default UserCard;
