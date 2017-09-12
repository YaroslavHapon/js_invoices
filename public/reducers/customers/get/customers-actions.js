export const FETCH_CUSTOMERS = "FETCH_CUSTOMERS";
export const FETCH_CUSTOMERS_SUCCESS = "FETCH_CUSTOMERS_SUCCESS";
export const FETCH_CUSTOMERS_FAILURE = "FETCH_CUSTOMERS_FAILURE";

export function fetchCustomers () {
  return {
    type: FETCH_CUSTOMERS,
    payload: []
  }
}