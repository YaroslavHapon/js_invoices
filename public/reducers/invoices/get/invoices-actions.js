export const FETCH_INVOICES = "FETCH_INVOICES";
export const FETCH_INVOICES_SUCCESS = "FETCH_INVOICES_SUCCESS";
export const FETCH_INVOICES_FAILURE = "FETCH_INVOICES_FAILURE";

export function fetchInvoices () {
  return {
    type: FETCH_INVOICES,
    payload: []
  }
}