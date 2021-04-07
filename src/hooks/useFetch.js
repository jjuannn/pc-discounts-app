import { useEffect, useReducer } from "react";

const ACTIONS = {
  LOADING: "LOADING",
  FAILURE: "FAILURE",
  SUCCESS: "SUCCESS",
};

const INITIAL_VALUES = {
  data: null,
  loading: false,
  error: null,
};

function fetchReducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case ACTIONS.LOADING:
      return { ...state, loading: true, error: null, data: null };
    case ACTIONS.SUCCESS:
      return { ...state, loading: false, error: null, data: payload };
    case ACTIONS.FAILURE:
      return { ...state, loading: false, error: payload, data: null };
    default:
      return state;
  }
}

export function useFetch(fetchFunction, filter1 = "", filter2 = "") {
  const [state, dispatch] = useReducer(fetchReducer, INITIAL_VALUES);
  // FALTA IMPLEMENTAR CACHE => chusmear eso para hacerlo lo + eficiente posible
  useEffect(() => {
    dispatch({ type: ACTIONS.LOADING });
    const getData = async () => {
      try {
        const data = await fetchFunction(filter1, filter2);
        dispatch({ type: ACTIONS.SUCCESS, payload: data });
      } catch (err) {
        dispatch({ type: ACTIONS.FAILURE, payload: err });
      }
    };
    getData();
  }, [fetchFunction, filter1, filter2]);

  return {
    data: state.data,
    error: state.error,
    loading: state.loading,
  };
}

export function useFetchForFilters(
  fetchFunction,
  { title, lower, higher, pageNumber }
) {
  const [state, dispatch] = useReducer(fetchReducer, INITIAL_VALUES);
  useEffect(() => {
    dispatch({ type: ACTIONS.LOADING });
    const getData = async () => {
      try {
        if (title) {
          const data = await fetchFunction(title);
          dispatch({ type: ACTIONS.SUCCESS, payload: data });
        } else {
          const data = await fetchFunction(pageNumber, lower, higher);
          dispatch({ type: ACTIONS.SUCCESS, payload: data });
        }
      } catch (err) {
        dispatch({ type: ACTIONS.FAILURE, payload: err });
      }
    };
    getData();
  }, [fetchFunction, title, lower, higher, pageNumber]);

  return {
    data: state.data,
    error: state.error,
    loading: state.loading,
  };
}
