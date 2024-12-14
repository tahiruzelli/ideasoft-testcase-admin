import { all } from "redux-saga/effects";
import productSaga from "./product/saga";
import CategorySaga from "./category/saga";

export default function* sagas() {
  yield all([productSaga(), CategorySaga()]);
}
