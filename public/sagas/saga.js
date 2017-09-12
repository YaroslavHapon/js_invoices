import "regenerator-runtime/runtime";
import { all, fork } from 'redux-saga/effects'
import { fetchInvoices, postInvoices, putInvoices, deleteInvoice } from './invoice-saga/invoice-saga'
import { fetchCustomers } from './customers-saga/customers-saga'
import { fetchProducts } from './products-saga/products-saga'

export default function *rootSaga() {
  yield all([
    fork(fetchInvoices),
    fork(postInvoices),
    fork(putInvoices),
    fork(fetchCustomers),
    fork(fetchProducts),
    fork(deleteInvoice)
  ])
}