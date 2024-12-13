import { takeLatest, call, put, all } from "redux-saga/effects";
import axios from "axios";
import { GET_PRODUCTS_STARTED } from "./types";
import { getProductsSucceed, getProductsFailed } from "./actions";
import { getToken } from "@/src/utils/helpers/token";
import { urls } from "@/src/utils/constans/urls";

function* getProductsTask(action: any) {
  try {
    const response = yield call(axios.get, `${urls.baseUrl}${urls.product}`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
    const { data } = response;
    yield put(getProductsSucceed(data));
  } catch (error) {
    yield put(getProductsFailed(error?.response?.data));
  }
}
function* watchGetProducts() {
  yield takeLatest(GET_PRODUCTS_STARTED, getProductsTask);
}

export default function* saga() {
  yield all([watchGetProducts()]);
}
