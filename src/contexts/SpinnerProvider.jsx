import React, { createContext, useState } from "react";
export const spinnerContext = createContext(null);
const SpinnerProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  const loaderState = {
    loading,
    setLoading,
  };

  return (
    <spinnerContext.Provider value={loaderState}>
      {children}
    </spinnerContext.Provider>
  );
};

export default SpinnerProvider;
