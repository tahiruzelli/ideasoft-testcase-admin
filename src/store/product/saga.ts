import { takeLatest, call, put, all } from "redux-saga/effects";
import axios from "axios";
import {
  ADD_PRODUCT_STARTED,
  DELETE_PRODUCT_STARTED,
  GET_CURRENCIES_STARTED,
  GET_PRODUCTS_STARTED,
} from "./types";
import {
  getProductsSucceed,
  getProductsFailed,
  addProductSucceed,
  addProductFailed,
  getCurrenciesSucceed,
  getCurrenciesFailed,
  deleteProductSucceed,
  deleteProductFailed,
} from "./actions";
import { getToken } from "@/src/utils/helpers/token";
import { urls } from "@/src/utils/constans/urls";

function* deleteProductTask(action: any) {
  const { payload } = action;
  const { id } = payload;
  try {
    const response = yield call(
      axios.delete,
      `${urls.baseUrl}${urls.product}/${id}`,
      {
        headers: { Authorization: `Bearer ${getToken()}` },
      }
    );
    const { data } = response;
    yield put(deleteProductSucceed(data));
  } catch (error) {
    yield put(deleteProductFailed(error?.response?.data));
  }
}
function* getCurrenciesTask(action: any) {
  try {
    const response = yield call(
      axios.get,
      `${urls.baseUrl}${urls.currencies}`,
      {
        headers: { Authorization: `Bearer ${getToken()}` },
      }
    );
    const { data } = response;
    yield put(getCurrenciesSucceed(data));
  } catch (error) {
    yield put(getCurrenciesFailed(error?.response?.data));
  }
}
function* addProductTask(action: any) {
  const { payload } = action;
  const { name, stockAmount, price1, currency, status } = payload;
  try {
    const response = yield call(
      axios.post,
      `${urls.baseUrl}${urls.product}`,
      {
        name: name,
        stockAmount: stockAmount,
        price1: price1,
        currency: currency,
        status: status,
        sku: name,
      },
      {
        headers: { Authorization: `Bearer ${getToken()}` },
      }
    );
    const { data } = response;
    yield put(addProductSucceed(data));
  } catch (error) {
    yield put(addProductFailed(error?.response?.data));
  }
}
function* getProductsTask(action: any) {
  try {
    const response = yield call(axios.get, `${urls.baseUrl}${urls.product}`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
    const { data } = response;
    console.log(data[0].sortOrder);
    data.sort((a, b) => b.homeSortOrder - a.homeSortOrder);
    yield put(getProductsSucceed(data));
  } catch (error) {
    yield put(getProductsFailed(error?.response?.data));
  }
}

function* watchGetCurrencies() {
  yield takeLatest(GET_CURRENCIES_STARTED, getCurrenciesTask);
}
function* watchAddProduct() {
  yield takeLatest(ADD_PRODUCT_STARTED, addProductTask);
}
function* watchGetProducts() {
  yield takeLatest(GET_PRODUCTS_STARTED, getProductsTask);
}
function* watchDeleteProduct() {
  yield takeLatest(DELETE_PRODUCT_STARTED, deleteProductTask);
}

export default function* saga() {
  yield all([
    watchGetProducts(),
    watchAddProduct(),
    watchGetCurrencies(),
    watchDeleteProduct(),
  ]);
}
