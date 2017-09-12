export const DELETE_INVOICE = 'DELETE_INVOICE'
export const DELETE_INVOICE_SUCCESS = 'DELETE_INVOICE_SUCCESS'
export const DELETE_INVOICE_FAILURE = 'DELETE_INVOICE_FAILURE'

export function deleteInvoice(id) {
  return {
    type: DELETE_INVOICE,
    payload: id
  }
}