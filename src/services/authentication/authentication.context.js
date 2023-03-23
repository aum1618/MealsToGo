import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { createContext, useState } from "react";

import { loginRequest } from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  onAuthStateChanged(getAuth(), (user) => {
    if (user) {
      setIsLoading(false);
      setUser(user);
    } else {
      setIsLoading(false);
      setUser(null);
    }
  });

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((u) => {
        setIsLoading(false);
        setUser(u);
      })
      .catch((e) => {
        setError(e.toString());
      });
  };

  const onRegister = (email, password, repeatPassword) => {
    if (password !== repeatPassword) {
      setError("Passwords don't Match");
      return;
    }

    setIsLoading(true);
    createUserWithEmailAndPassword(getAuth(), email, password)
      .then((u) => {
        setIsLoading(false);
        setUser(u);
      })
      .catch((e) => {
        setError(e.toString());
      });
  };

  const onLogout = () => {
    setIsLoading(true);
    signOut(getAuth())
      .then(() => {
        setIsLoading(false);
        setUser(null);
      })
      .catch((e) => {
        setError(e.toString());
      });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        isLoading,
        user,
        error,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
