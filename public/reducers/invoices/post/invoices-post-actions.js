export const POST_INVOICE = "POST_INVOICES";
export const POST_INVOICE_SUCCESS = "POST_INVOICES_SUCCESS";
export const POST_INVOICE_FAILURE = "POST_INVOICES_FAILURE";

export function postInvoice (invoice) {
  return {
    type: POST_INVOICE,
    payload: { invoice }
  }
}