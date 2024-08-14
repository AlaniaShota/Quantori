import React, { useState } from "react";
import { useAuth } from "./useAuth";

const AuthComponent: React.FC = () => {
  const { login, isAuthenticated } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    await login(username, password);
  };

  if (isAuthenticated) {
    return null;
  }

  return (
    <div className="flex flex-col justify-center gap-2 items-center h-screen w-auto">
      <input
        type="text"
        placeholder="Username"
        className="border py-2 px-6 rounded-md"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="border py-2 px-6 rounded-md"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleLogin}
        className="border py-2 px-6 rounded-md bg-[#0866FF] text-white hover:bg-[#3866A3]"
      >
        Login
      </button>
    </div>
  );
};

export default AuthComponent;
