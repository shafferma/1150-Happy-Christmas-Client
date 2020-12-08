import React, { createContext, useContext, useState, useEffect } from "react";
import { useEventHook } from 'hooks/use-event-hook'

const dataContext = createContext();

// wrap our app
export const DataRefreshProvider = ({ children }) => {
  const data = useDataRefreshProvider();
  return <dataContext.Provider value={data}>{children}</dataContext.Provider>;
};

export const useDataRefresh = () => {
  return useContext(dataContext);
};

function useDataRefreshProvider() {

  const photoRefresh = useEventHook()
  // const users = useEventHook()
  // const auth = useEventHook()
 
  return {
    photoRefresh,
    // users,
    // auth,
  };
}
