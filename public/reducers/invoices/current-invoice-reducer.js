import * as actions from "./current-invoice-actions"

const initialState = null;

export default function currentInvoiceReducer(state = initialState, action) {
  switch (action.type){
    case actions.ADD_INVOICE:
      return {...state, data: action.payload}
    default:
      return state;
  }
}