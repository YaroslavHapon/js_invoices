import * as actions from "./products-actions";

const initialState = {
  loading: false,
  loaded: false,
  data: null,
  error: null
};

export default function productsGetReducer (state= initialState, action) {
  switch (action.type) {
    case actions.FETCH_PRODUCTS:
      return { ...state, loading: true };
    case actions.FETCH_PRODUCTS_SUCCESS:
      return { ...state, loading: false, loaded: true, data: action.payload };
    case actions.FETCH_PRODUCTS_FAILURE:
      return {...state, loading: false, loaded: false, error: action.payload };
  }
  return state
}