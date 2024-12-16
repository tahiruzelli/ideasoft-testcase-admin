import {
  GET_PRODUCTS_STARTED,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_RESET,
  GET_PRODUCTS_ERROR,
  SET_CURRENT_PRODUCT,
  ADD_PRODUCT_RESET,
  ADD_PRODUCT_STARTED,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
  GET_CURRENCIES_STARTED,
  GET_CURRENCIES_RESET,
  GET_CURRENCIES_ERROR,
  GET_CURRENCIES_SUCCESS,
} from "./types";

//GET PRODUCTS
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

//ADD PRODUCT
export const addProduct = (values: any) => ({
  type: ADD_PRODUCT_STARTED,
  payload: values,
});

export const addProductSucceed = (data: any) => ({
  type: ADD_PRODUCT_SUCCESS,
  payload: data,
});

export const addProductFailed = (error: any) => ({
  type: ADD_PRODUCT_ERROR,
  payload: error,
});

export const addProductReset = () => {
  return { type: ADD_PRODUCT_RESET };
};

//GET CURRENCIES
export const getCurrencies = (values: any) => ({
  type: GET_CURRENCIES_STARTED,
  payload: values,
});

export const getCurrenciesSucceed = (data: any) => ({
  type: GET_CURRENCIES_SUCCESS,
  payload: data,
});

export const getCurrenciesFailed = (error: any) => ({
  type: GET_CURRENCIES_ERROR,
  payload: error,
});

export const getCurrenciesReset = () => {
  return { type: GET_CURRENCIES_RESET };
};
