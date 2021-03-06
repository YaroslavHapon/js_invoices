import * as actions from "./invoices-delete-actions"

const initialState = {
  loading: false,
  loaded: false,
  data: null,
  error: null
};

export default function deleteInvoiceReducer(state = initialState, action) {
  switch (action.type){
    case actions.DELETE_INVOICE:
      return {...state, loading: true}
    case actions.DELETE_INVOICE_SUCCESS:
      return {...state, loading: false, loaded: true, data: action.payload}
    case actions.DELETE_INVOICE_FAILURE:
      return {...state, loading: false, loaded: false, error: action.payload}
    default:
      return state;
  }
}