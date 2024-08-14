import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUser, login } from "./dummyService";
import { AuthContextType, UserData } from "./types/types";

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      if (token) {
        try {
          const user = await getUser(token);
          setUserData(user);
        } catch (error) {
          console.error("Failed to fetch user:", error);
        }
      }
    };

    fetchUserData();
  }, [token]);

  const handleLogin = async (username: string, password: string) => {
    try {
      const data = await login(username, password);
      setToken(data.token);
      navigate("/profile", { state: { userData } });
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleLogout = () => {
    setToken(null);
    setUserData(null);
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        userData,
        token,
        login: handleLogin,
        logout: handleLogout,
        isAuthenticated: !!token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
