import { useState } from "react";
import { createContext, useContext } from "react";

export const LoadingContext = createContext({
  loading: true,
  setLoading: (loading: boolean) => {},
  hasSiteLoaded: false,
  setHasSiteLoaded: (hasSiteLoaded: boolean) => {},
  isInShop: false,
  setIsInShop: (isInShop: boolean) => {},
});

export function useIsLoading() {
  return useContext(LoadingContext);
}

export default function LoadingContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  const [hasSiteLoaded, setHasSiteLoaded] = useState(false);
  const [isInShop, setIsInShop] = useState(false);

  return (
    <LoadingContext.Provider
      value={{
        loading,
        setLoading,
        hasSiteLoaded,
        setHasSiteLoaded,
        isInShop,
        setIsInShop,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
}
