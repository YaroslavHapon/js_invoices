import { take, call, put } from "redux-saga/effects";
import Api from "./../../service/Api";
import { FETCH_CUSTOMERS, FETCH_CUSTOMERS_SUCCESS, FETCH_CUSTOMERS_FAILURE } from "./../../reducers/customers/get/customers-actions"

export function* fetchCustomers () {
  while (true) {
    yield take(FETCH_CUSTOMERS);
    try {
      const data = yield call(Api.fetchCustomers);
      yield put({type: FETCH_CUSTOMERS_SUCCESS, payload: data});
    } catch (error) {
      yield put({type: FETCH_CUSTOMERS_FAILURE, payload: error})
    }
  }
}