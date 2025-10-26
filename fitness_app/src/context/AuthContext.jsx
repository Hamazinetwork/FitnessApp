import { createContext, useContext, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );

  const [user, setUser] = useState(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null
  );

  const loginUser = async (username, password) => {
    const res = await axios.post("/api/auth/token/", { username, password });
    if (res.status === 200) {
      setAuthTokens(res.data);
      localStorage.setItem("authTokens", JSON.stringify(res.data));
      localStorage.setItem("user", JSON.stringify({ username }));
      setUser({ username });
    }
  };

  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.clear();
  };

  return (
    <AuthContext.Provider value={{ user, authTokens, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
