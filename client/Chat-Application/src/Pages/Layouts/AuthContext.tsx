import { useMutation } from "@tanstack/react-query";
import { UseMutationResult } from "@tanstack/react-query/build/lib/types";
import axios, { AxiosResponse } from "axios";
import { createContext, ReactNode, useContext } from "react";

type AuthContext = { SignUp: UseMutationResult<AxiosResponse, unknown, User> };

type User = {
  id: string;
  name: string;
  image?: string;
};

const Context = createContext<AuthContext | null>(null);

export const UseAuth = () => {
  return useContext(Context) as AuthContext;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const SignUp = useMutation({
    mutationFn: (user: User) => {
      return axios.post(`${import.meta.env.VITE_SERVER_URL} /signup`, user);
    },
  });

  return <Context.Provider value={{ SignUp }}>{children}</Context.Provider>;
};
