export const PUT_INVOICE = "PUT_INVOICE";
export const PUT_INVOICE_SUCCESS = "PUT_INVOICES_SUCCESS";
export const PUT_INVOICE_FAILURE = "PUT_INVOICES_FAILURE";

export function putInvoice (id, invoice) {
  return {
    type: PUT_INVOICE,
    payload: { id, invoice }
  }
}