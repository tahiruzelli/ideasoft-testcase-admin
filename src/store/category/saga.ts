import { takeLatest, call, put, all } from "redux-saga/effects";
import axios from "axios";
import { GET_CATEGORIES_STARTED } from "./types";
import { getCategoriesSucceed, getCategoriesFailed } from "./actions";
import { getToken } from "@/src/utils/helpers/token";
import { urls } from "@/src/utils/constans/urls";

function* getCategoriesTask(action: any) {
  try {
    const response = yield call(
      axios.get,
      `${urls.baseUrl}${urls.categories}`,
      {
        headers: { Authorization: `Bearer ${getToken()}` },
      }
    );
    const { data } = response;
    yield put(getCategoriesSucceed(data));
  } catch (error) {
    console.log(error?.response?.data);
    yield put(getCategoriesFailed(error?.response?.data));
  }
}
function* watchGetCategories() {
  yield takeLatest(GET_CATEGORIES_STARTED, getCategoriesTask);
}

export default function* saga() {
  yield all([watchGetCategories()]);
}
