export const ADD_INVOICE = 'ADD_INVOICE'

export function addCurrentInvoice(invoice) {
  return {
    type: ADD_INVOICE,
    payload: invoice
  }
}