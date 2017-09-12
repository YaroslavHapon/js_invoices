import { take, call, put } from "redux-saga/effects";
import Api from "./../../service/Api";
import { FETCH_PRODUCTS, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE } from "./../../reducers/products/get/products-actions"

export function* fetchProducts () {
  while (true) {
    yield take(FETCH_PRODUCTS);
    try {
      const data = yield call(Api.fetchProducts);
      yield put({type: FETCH_PRODUCTS_SUCCESS, payload: data});
    } catch (error) {
      yield put({type: FETCH_PRODUCTS_FAILURE, payload: error})
    }
  }
}