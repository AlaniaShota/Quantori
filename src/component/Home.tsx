import React from "react";
import { useAuth } from "../useAuth";

const Home: React.FC = () => {
  const { userData } = useAuth();

  if (!userData) {
    return <p>No user data available</p>;
  }

  return (
    <div className="flex items-start justify-start w-auto my-20 max-sm:flex-col flex-row">
      <div className="w-80 h-72">
        <img
          src={userData.image}
          alt="user avatar"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-start items-start ml-4">
        <h1 className="text-xl font-bold">
          {userData.firstName} {userData.lastName}
        </h1>
        <p className="mt-1 text-md">{userData.email}</p>
      </div>
    </div>
  );
};

export default Home;
