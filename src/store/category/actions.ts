import {
  GET_CATEGORIES_ERROR,
  GET_CATEGORIES_RESET,
  GET_CATEGORIES_STARTED,
  GET_CATEGORIES_SUCCESS,
  SET_CURRENT_CATEGORY,
} from "./types";

//GENERAL SETTINGS
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
