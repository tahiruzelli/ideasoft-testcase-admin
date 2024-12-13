import {
  GET_PRODUCTS_STARTED,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_RESET,
  GET_PRODUCTS_ERROR,
  SET_CURRENT_PRODUCT,
} from "./types";

//GENERAL SETTINGS
export const getProducts = (values: any) => ({
  type: GET_PRODUCTS_STARTED,
  payload: values,
});

export const getProductsSucceed = (data: any) => ({
  type: GET_PRODUCTS_SUCCESS,
  payload: data,
});

export const getProductsFailed = (error: any) => ({
  type: GET_PRODUCTS_ERROR,
  payload: error,
});

export const getProductsReset = () => {
  return { type: GET_PRODUCTS_RESET };
};

export const setCurrentProduct = (values: any) => {
  return { type: SET_CURRENT_PRODUCT, payload: values };
};
