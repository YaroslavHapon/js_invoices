import { take, call, put } from "redux-saga/effects";
import Api from "./../../service/Api";
import { FETCH_INVOICES, FETCH_INVOICES_SUCCESS, FETCH_INVOICES_FAILURE } from "./../../reducers/invoices/get/invoices-actions"
import { POST_INVOICE, POST_INVOICE_SUCCESS, POST_INVOICE_FAILURE } from "./../../reducers/invoices/post/invoices-post-actions"
import { PUT_INVOICE, PUT_INVOICE_SUCCESS, PUT_INVOICE_FAILURE } from "./../../reducers/invoices/put/invoices-put-actions"
import { DELETE_INVOICE, DELETE_INVOICE_SUCCESS, DELETE_INVOICE_FAILURE } from "./../../reducers/invoices/delete/invoices-delete-actions"

export function* fetchInvoices () {
  while (true) {
    yield take(FETCH_INVOICES);
    try {
      const data = yield call(Api.fetchInvoices);
      yield put({ type: FETCH_INVOICES_SUCCESS, payload: data });
    } catch (error) {
      yield put({ type: FETCH_INVOICES_FAILURE, payload: error })
    }
  }
}

export function* postInvoices() {
  while (true){
    try{
      const { payload: { invoice } } = yield take(POST_INVOICE);
      const response = yield call(Api.postInvoice, invoice);
      yield put({ type: POST_INVOICE_SUCCESS, payload: response });
    } catch (error) {
      yield put({ type: POST_INVOICE_FAILURE, payload: error });
    }
  }
}

export function* putInvoices() {
  while (true){
    try{
      const { payload: { id, invoice } } = yield take(PUT_INVOICE);
      const response = yield call(Api.putInvoice, id, invoice);
      yield put({ type: PUT_INVOICE_SUCCESS, payload: response });
    } catch (error) {
      yield put({ type: PUT_INVOICE_FAILURE, payload: error });
    }
  }
}

export function* deleteInvoice () {
  while (true) {
    try{
      const { payload } = yield take(DELETE_INVOICE);
      const response = yield call(Api.deleteInvoice, payload);
      yield put({ type: DELETE_INVOICE_SUCCESS, payload: response });
    } catch (error) {
      yield put({ type: DELETE_INVOICE_FAILURE, payload: error });
    }
  }
}