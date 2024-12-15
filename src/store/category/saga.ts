import { takeLatest, call, put, all } from "redux-saga/effects";
import axios from "axios";
import {
  ADD_CATEGORIES_STARTED,
  EDIT_CATEGORIES_STARTED,
  GET_CATEGORIES_STARTED,
} from "./types";
import {
  getCategoriesSucceed,
  getCategoriesFailed,
  addCategorySucceed,
  addCategoryFailed,
  editCategorySucceed,
  editCategoryFailed,
} from "./actions";
import { getToken } from "@/src/utils/helpers/token";
import { urls } from "@/src/utils/constans/urls";

function* editCategoryTask(action: any) {
  const { payload } = action;
  const { name, showcaseContent, metaKeywords, status, id } = payload;
  try {
    console.log("saga");
    const response = yield call(
      axios.put,
      `${urls.baseUrl}${urls.categories}/${id}`,
      {
        name: name,
        showcaseContent: showcaseContent,
        metaKeywords: metaKeywords,
        status: status,
      },
      {
        headers: { Authorization: `Bearer ${getToken()}` },
      }
    );
    const { data } = response;
    console.log(data);
    yield put(editCategorySucceed(data));
  } catch (error) {
    console.log(error?.response?.data);
    yield put(editCategoryFailed(error?.response?.data));
  }
}
function* addCategoryTask(action: any) {
  const { payload } = action;
  const { name, showcaseContent, metaKeywords, status } = payload;
  try {
    const response = yield call(
      axios.post,
      `${urls.baseUrl}${urls.categories}`,
      {
        name: name,
        showcaseContent: showcaseContent,
        metaKeywords: metaKeywords,
        status: status,
      },
      {
        headers: { Authorization: `Bearer ${getToken()}` },
      }
    );
    const { data } = response;
    yield put(addCategorySucceed(data));
  } catch (error) {
    console.log(error?.response?.data);
    yield put(addCategoryFailed(error?.response?.data));
  }
}
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
    data.sort((a, b) => a.sortOrder - b.sortOrder);
    yield put(getCategoriesSucceed(data));
  } catch (error) {
    console.log(error?.response?.data);
    yield put(getCategoriesFailed(error?.response?.data));
  }
}

function* watchEditCategory() {
  yield takeLatest(EDIT_CATEGORIES_STARTED, editCategoryTask);
}
function* watchAddCategory() {
  yield takeLatest(ADD_CATEGORIES_STARTED, addCategoryTask);
}
function* watchGetCategories() {
  yield takeLatest(GET_CATEGORIES_STARTED, getCategoriesTask);
}

export default function* saga() {
  yield all([watchGetCategories(), watchAddCategory(), watchEditCategory()]);
}
