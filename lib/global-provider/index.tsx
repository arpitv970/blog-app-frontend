"use client";

import { ClerkProvider } from "@clerk/nextjs";

interface IGlobalProvider {
  children: React.ReactNode;
}

export const GlobalProvider: React.FC<IGlobalProvider> = ({ children }) => {
  return (
    <>
    <ClerkProvider>{ children } </ClerkProvider>
    </>
  );
};
