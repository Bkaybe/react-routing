import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserDetails() {
  const [user, setUser] = useState({});

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/users/${id}`)
      .then((res) => res.json())
      .then((user) => setUser(user))
      .catch((error) => console.error(error));
  }, [id]);
  return (
    <div>      <h1>User Details</h1>
      <div>
        <h1>Name: {user.name}</h1>
        <h1>User Name: {user.username}</h1>
        <h1>Email: {user.email}</h1>
      </div>
    </div>
  );
}

export default UserDetails;
