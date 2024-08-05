// src/UserDetail.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUser } from "../../service/apiUser";
import { useMoveBack } from "../../hook/useMoveBack";
const UserDetail = () => {
  const moveBack = useMoveBack();
  const { userId } = useParams();
  
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  
  useEffect(() => {
    console.log(userId);
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const data = await getUser(userId);
        setUser(data);
      } catch (err) {
        setError('Failed to fetch user');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []); // Empty dependency array means this runs once on mount
    // Function to add a new user

  if (loading) return <p>Loading...</p>;
  
  if (error) return <p>{error}</p>;


  return (
    <div className="user-detail-container">
      {/* <img className="user-image" src={user.profilePicture} alt={`${user.name}'s profile`} /> */}
      <div className="user-info">
        <h1 className="user-name">{user.name}</h1>
        <p className="user-email">{user.email}</p>
        <p className="user-phone">{user.phone}</p>
        <p className="user-address">{`${user.address.street}, ${user.address.city}, ${user.address.zip}`}</p>
      </div>
      <button onClick={moveBack} className="button is-ghost">
          &larr; Go back
        </button>
    </div>
  );
};

export default UserDetail;
