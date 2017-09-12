import * as actions from "./invoices-actions";
import { DELETE_INVOICE_SUCCESS } from './../delete/invoices-delete-actions'
import { POST_INVOICE_SUCCESS } from './../post/invoices-post-actions'
import { PUT_INVOICE_SUCCESS } from './../put/invoices-put-actions'

const initialState = {
  loading: false,
  loaded: false,
  data: null,
  error: null
};

const updateInvoice = (data, action) => {
  return data.map(item => {
    return item.id !== action.payload.id ? item :  { ...item, ...action.payload }
  })
};

export default function invoicesGetReducer (state= initialState, action) {
  switch (action.type) {
    case actions.FETCH_INVOICES:
      return { ...state, loading: true };
    case actions.FETCH_INVOICES_SUCCESS:
      return { ...state, loading: false, loaded: true, data: action.payload };
    case actions.FETCH_INVOICES_FAILURE:
      return {...state, loading: false, loaded: false, error: action.payload };
    case DELETE_INVOICE_SUCCESS:
      return {...state,
        data: state.data.filter(x => x.id !== action.payload.id)
      }
    case POST_INVOICE_SUCCESS:
      return { ...state, data: state.data.concat(action.payload) }
    case PUT_INVOICE_SUCCESS:
      return { ...state, data: updateInvoice(state.data, action)}
    default:
      return state
  }
}