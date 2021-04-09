import { useEffect, useReducer, useContext } from "react";
import cacheContext from "../context/cacheContext";

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

export function useFetch(fetchFunction, param) {
  const [state, dispatch] = useReducer(fetchReducer, INITIAL_VALUES);
  const cache = useContext(cacheContext);
  useEffect(() => {
    if (cache.page && cache.page[param]) {
      dispatch({ type: ACTIONS.SUCCESS, payload: cache.page[param] });
      return;
    }

    dispatch({ type: ACTIONS.LOADING });
    const getData = async () => {
      try {
        const data = await fetchFunction(param);
        dispatch({ type: ACTIONS.SUCCESS, payload: data });
        cache.dispatch({
          type: "SET_CACHE",
          payload: { key: param, value: data },
        });
      } catch (err) {
        dispatch({ type: ACTIONS.FAILURE, payload: err });
      }
    };
    getData();
  }, [fetchFunction, param]);

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
  const cache = useContext(cacheContext);
  useEffect(() => {
    if (title) {
      if (cache.page && cache.page[title]) {
        dispatch({ type: ACTIONS.SUCCESS, payload: cache.page[title] });
        return;
      }
    } else {
      if (cache.page && cache.page[pageNumber + lower + higher]) {
        dispatch({
          type: ACTIONS.SUCCESS,
          payload: cache.page[pageNumber + lower + higher],
        });
        return;
      }
    }

    dispatch({ type: ACTIONS.LOADING });
    const getData = async () => {
      try {
        if (title) {
          const data = await fetchFunction(title);
          dispatch({ type: ACTIONS.SUCCESS, payload: data });

          cache.dispatch({
            type: "SET_CACHE",
            payload: { key: title, value: data },
          });
        } else {
          const data = await fetchFunction(pageNumber, lower, higher);
          dispatch({ type: ACTIONS.SUCCESS, payload: data });
          cache.dispatch({
            type: "SET_CACHE",
            payload: { key: pageNumber + lower + higher, value: data },
          });
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
