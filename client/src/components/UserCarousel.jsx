import { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "./Carousel";
import UserCard from "./UserCard";

function UserCarousel() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3310/api/candidate")
      .then((response) => {
        if (Array.isArray(response.data)) {
          setUsers(response.data);
          setLoading(false);
        } else {
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const renderUser = (user) => <UserCard key={user.id} user={user} />;

  if (loading) {
    return <div>Loading...</div>;
  }

  return <Carousel items={users} renderItem={renderUser} />;
}

export default UserCarousel;
