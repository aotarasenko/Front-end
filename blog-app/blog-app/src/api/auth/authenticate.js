import { useContext, useState, useEffect, createContext } from "react";

const AuthContext = createContext({});

const AuthProvider = (props) => {
  const authContextValue = {};
  return <AuthContext.Provider value={authContextValue} {...props} />;
};
