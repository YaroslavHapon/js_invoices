import * as actions from "./customers-actions";

const initialState = {
  loading: false,
  loaded: false,
  data: null,
  error: null
};

export default function customersGetReducer (state= initialState, action) {
  switch (action.type) {
    case actions.FETCH_CUSTOMERS:
      return { ...state, loading: true };
    case actions.FETCH_CUSTOMERS_SUCCESS:
      return { ...state, loading: false, loaded: true, data: action.payload };
    case actions.FETCH_CUSTOMERS_FAILURE:
      return {...state, loading: false, loaded: false, error: action.payload };
  }
  return state
}