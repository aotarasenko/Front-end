import { useContext, useReducer, createContext } from "react";
import { authReducer } from "./authReducer";
import { initialState } from "../../App";

const AuthStateContext = createContext();
const AuthDispatchContext = createContext();

export const useAuthState = () => {
  const ctx = useContext(AuthStateContext);
  if (!ctx) {
    throw new Error("useAuthState must be used within a AuthProvider");
  }

  return ctx;
};

export function useAuthDispatch() {
  const ctx = useContext(AuthDispatchContext);
  if (!ctx) {
    throw new Error("useAuthDispatch must be used within a AuthProvider");
  }

  return ctx;
}

export const AuthProvider = ({ children }) => {
  const [user, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthStateContext.Provider value={user}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};
