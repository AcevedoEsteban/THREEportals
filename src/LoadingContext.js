// LoadingContext.js
import React, { createContext, useContext, useState } from 'react';

const LoadingContext = createContext({
  isLoading: false,
  setLoading: () => {},
  progress: 0,
  setProgress: () => {},
});

export const useLoading = () => useContext(LoadingContext);

export const LoadingProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  return (
    <LoadingContext.Provider value={{ isLoading, setLoading, progress, setProgress }}>
      {children}
    </LoadingContext.Provider>
  );
};
