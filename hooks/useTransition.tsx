import { useState } from "react";
import { createContext, useContext } from "react";

export const TransitionContext = createContext({
  hasPageLoaded: false,
  setHasPageLoaded: (hasPageLoaded: boolean) => {},
});

export function useTransition() {
  return useContext(TransitionContext);
}

export default function TransitionContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [hasPageLoaded, setHasPageLoaded] = useState(false);

  return (
    <TransitionContext.Provider value={{ hasPageLoaded, setHasPageLoaded }}>
      {children}
    </TransitionContext.Provider>
  );
}
