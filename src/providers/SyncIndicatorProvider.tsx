"use client";
import React, { ReactNode } from "react";

const SyncContext = React.createContext({
  syncing: false,
  setSyncing: (syncing: boolean) => {},
});

const SyncIndicatorProvider = ({ children }: { children: ReactNode }) => {
  const [syncing, setSyncing] = React.useState(false);
  return (
    <SyncContext.Provider value={{ setSyncing, syncing }}>
      {children}
    </SyncContext.Provider>
  );
};

export const useSyncIndicator = () => {
  const context = React.useContext(SyncContext);
  if (!context) {
    throw new Error(
      "useSyncIndicator must be used within a SyncIndicatorProvider"
    );
  }
  return context;
};

export default SyncIndicatorProvider;
