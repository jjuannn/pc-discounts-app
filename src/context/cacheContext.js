import { createContext, useEffect, useReducer } from "react";

const cacheContext = createContext();

export function CacheContextProvider({ children }) {
  const [page, dispatch] = useReducer(
    cacheReducer,
    JSON.parse(localStorage.getItem("app_cache"))
  );

  useEffect(() => {
    const data = JSON.stringify(page);
    localStorage.setItem("app_cache", data);
  }, [page]);

  return (
    <cacheContext.Provider value={{ page, dispatch }}>
      {children}
    </cacheContext.Provider>
  );
}

const ACTIONS = {
  SET_CACHE: "SET_CACHE",
};

const cacheReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTIONS.SET_CACHE:
      return { ...state, [payload.key]: payload.value };
    default:
      return state;
  }
};

export default cacheContext;
