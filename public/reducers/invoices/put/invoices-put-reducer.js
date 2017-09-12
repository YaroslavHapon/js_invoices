import * as actions from "./invoices-put-actions"

const initialState = {
  loading: false,
  loaded: false,
  data: null,
  error: null
}

export default function invoicePutReducer(state = initialState, action) {
  switch (action.type){
    case actions.PUT_INVOICE:
      return {...state, loading: false}
    case actions.PUT_INVOICE_SUCCESS:
      return { ...state, loading: false, loaded: true, data: action.payload.data };
    case actions.PUT_INVOICE_FAILURE:
      return { ...state, loading: false, loaded: false, error: action.payload };
    default:
      return state
  }
}