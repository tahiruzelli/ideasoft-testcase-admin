import {
  GET_CATEGORIES_ERROR,
  GET_CATEGORIES_RESET,
  GET_CATEGORIES_STARTED,
  GET_CATEGORIES_SUCCESS,
  SET_CURRENT_CATEGORY,
  ADD_CATEGORIES_ERROR,
  ADD_CATEGORIES_STARTED,
  ADD_CATEGORIES_SUCCESS,
  ADD_CATEGORIES_RESET,
  EDIT_CATEGORIES_STARTED,
  EDIT_CATEGORIES_ERROR,
  EDIT_CATEGORIES_SUCCESS,
} from "./types";

//GET
export const getCategories = (values: any) => ({
  type: GET_CATEGORIES_STARTED,
  payload: values,
});

export const getCategoriesSucceed = (data: any) => ({
  type: GET_CATEGORIES_SUCCESS,
  payload: data,
});

export const getCategoriesFailed = (error: any) => ({
  type: GET_CATEGORIES_ERROR,
  payload: error,
});

export const getCategoriesReset = () => {
  return { type: GET_CATEGORIES_RESET };
};

export const setCurrentCategory = (values: any) => {
  return { type: SET_CURRENT_CATEGORY, payload: values };
};

//ADD
export const addCategory = (values: any) => ({
  type: ADD_CATEGORIES_STARTED,
  payload: values,
});

export const addCategorySucceed = (data: any) => ({
  type: ADD_CATEGORIES_SUCCESS,
  payload: data,
});

export const addCategoryFailed = (error: any) => ({
  type: ADD_CATEGORIES_ERROR,
  payload: error,
});
export const AddCategoryReset = () => {
  return { type: ADD_CATEGORIES_RESET };
};

//EDIT
export const editCategory = (values: any) => ({
  type: EDIT_CATEGORIES_STARTED,
  payload: values,
});

export const editCategorySucceed = (data: any) => ({
  type: EDIT_CATEGORIES_SUCCESS,
  payload: data,
});

export const editCategoryFailed = (error: any) => ({
  type: EDIT_CATEGORIES_ERROR,
  payload: error,
});
