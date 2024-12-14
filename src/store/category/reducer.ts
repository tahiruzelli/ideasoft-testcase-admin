import {
  GET_CATEGORIES_ERROR,
  GET_CATEGORIES_RESET,
  GET_CATEGORIES_STARTED,
  GET_CATEGORIES_SUCCESS,
  SET_CURRENT_CATEGORY,
} from "./types";

const initialState = {
  categories: [],
  currentCategory: {},
  isLoading: true,
  error: null,
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

    default:
      return state;
  }
};
export default category;
