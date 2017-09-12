import * as actions from "./invoices-post-actions"
import { PUT_INVOICE_SUCCESS } from "./../put/invoices-put-actions"

const initialState = {
  loading: false,
  loaded: false,
  data: null,
  error: null
};

export default function invoicesPostReducer(state = initialState, action) {
  switch (action.type) {
    case actions.POST_INVOICE:
      return { ...state, loading: true };
    case actions.POST_INVOICE_SUCCESS:
    case PUT_INVOICE_SUCCESS:
      return { ...state, loading: false, loaded: true, data: action.payload };
    case actions.POST_INVOICE_FAILURE:
      console.log(action.payload);
      return {...state, loading: false, loaded: false, error: action.payload };
  }
  return state
}