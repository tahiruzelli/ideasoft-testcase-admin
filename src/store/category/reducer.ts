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
  EDIT_CATEGORIES_SUCCESS,
  EDIT_CATEGORIES_ERROR,
  DELETE_CATEGORY_STARTED,
  DELETE_CATEGORY_ERROR,
  DELETE_CATEGORY_SUCCESS,
} from "./types";

const initialState = {
  categories: [],
  currentCategory: {},
  isLoading: true,
  error: null,
  addCategorySucceded: false,
};

const category = (state = initialState, action: any) => {
  const { payload = {} } = action;
  switch (action.type) {
    case GET_CATEGORIES_STARTED:
      return {
        ...state,
        isLoading: true,
      };
    case GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        categories: payload,
      };
    case GET_CATEGORIES_ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case GET_CATEGORIES_RESET:
      return {
        ...state,
        categories: [],
      };
    case SET_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: payload,
      };

    case ADD_CATEGORIES_STARTED:
      return {
        ...state,
        isLoading: true,
        addCategorySucceded: false,
      };
    case ADD_CATEGORIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        addCategorySucceded: true,
        categories: [...state?.categories, payload],
      };
    case ADD_CATEGORIES_ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload,
        addCategorySucceded: false,
      };
    case ADD_CATEGORIES_RESET:
      return {
        ...state,
        addCategorySucceded: false,
      };

    case EDIT_CATEGORIES_STARTED:
      return {
        ...state,
        isLoading: true,
        addCategorySucceded: false,
      };
    case EDIT_CATEGORIES_SUCCESS:
      const categories = state?.categories;
      const element = categories.filter(
        (element: any) => element?.id === payload.id
      )[0];
      const index = categories.indexOf(element);
      categories.splice(index, 1);
      categories.push(payload);
      categories.sort((a, b) => a.sortOrder - b.sortOrder);
      return {
        ...state,
        isLoading: false,
        addCategorySucceded: true,
        categories: [...state?.categories],
      };
    case EDIT_CATEGORIES_ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload,
        addCategorySucceded: false,
      };

    case DELETE_CATEGORY_STARTED:
      return {
        ...state,
        isLoading: true,
        addCategorySucceded: false,
      };
    case DELETE_CATEGORY_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case DELETE_CATEGORY_ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

    default:
      return state;
  }
};
export default category;
