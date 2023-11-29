import { useState, useEffect, createContext } from "react";
import { AuthServices } from "../Imports";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const sessionId = localStorage.getItem("sessionId");
      if (sessionId) {
        try {
          const auth = await AuthServices.listSessions();
          const sessions = auth.sessions;
          const active = sessions.map((session) => session.$id);
          setIsAuth(active.includes(sessionId));
        } catch (error) {
          console.error("Error fetching sessions:", error);
          setIsAuth(false);
        }
      } else {
        setIsAuth(false);
      }
    };

    fetchData();
  }, []);

  if (isAuth === undefined) {
    return null;
  }

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
};


export { AuthContext, AuthProvider };
