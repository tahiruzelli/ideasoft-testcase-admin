import {
  ADD_PRODUCT_ERROR,
  ADD_PRODUCT_RESET,
  ADD_PRODUCT_STARTED,
  ADD_PRODUCT_SUCCESS,
  GET_CURRENCIES_ERROR,
  GET_CURRENCIES_RESET,
  GET_CURRENCIES_STARTED,
  GET_CURRENCIES_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_RESET,
  GET_PRODUCTS_STARTED,
  GET_PRODUCTS_SUCCESS,
  SET_CURRENT_PRODUCT,
} from "./types";

const initialState = {
  products: [],
  currentProduct: {},
  currencies: [],
  addProductSucceed: false,
  isLoading: true,
  error: null,
};

const product = (state = initialState, action: any) => {
  const { payload = {} } = action;
  switch (action.type) {
    case GET_PRODUCTS_STARTED:
      return {
        ...state,
        isLoading: true,
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: payload,
      };
    case GET_PRODUCTS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case GET_PRODUCTS_RESET:
      return {
        ...state,
        products: {},
      };
    case SET_CURRENT_PRODUCT:
      return {
        ...state,
        currentProduct: payload,
      };
    //ADD PRODUCT
    case ADD_PRODUCT_STARTED:
      return {
        ...state,
        isLoading: true,
        addProductSucceed: false,
      };
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: [...state?.products, payload],
        addProductSucceed: true,
      };
    case ADD_PRODUCT_ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload,
        addProductSucceed: false,
      };
    case ADD_PRODUCT_RESET:
      return {
        ...state,
        addProductSucceed: false,
      };

    //GET CURRENCIES
    case GET_CURRENCIES_STARTED:
      return {
        ...state,
        isLoading: true,
      };
    case GET_CURRENCIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        currencies: payload,
      };
    case GET_CURRENCIES_ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case GET_CURRENCIES_RESET:
      return {
        ...state,
        currencies: [],
      };

    default:
      return state;
  }
};
export default product;
