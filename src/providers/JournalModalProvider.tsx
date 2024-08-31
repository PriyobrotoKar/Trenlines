"use client";
import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

const JournalModalContext = React.createContext<{
  closed: boolean;
  setClosed: Dispatch<SetStateAction<boolean>>;
} | null>(null);

const JournalModalProvider = ({ children }: { children: ReactNode }) => {
  const [closed, setClosed] = useState(false);
  return (
    <JournalModalContext.Provider value={{ closed, setClosed }}>
      {children}
    </JournalModalContext.Provider>
  );
};

export const useJournalModal = () => {
  const context = useContext(JournalModalContext);
  if (!context) {
    throw new Error(
      "useJournalModal must be used within a JournalModalProvider"
    );
  }
  return context;
};

export default JournalModalProvider;
