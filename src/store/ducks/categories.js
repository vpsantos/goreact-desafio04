/**
 * Types
 */
export const Types = {
  GET_REQUEST: 'categories/GET_REQUEST',
  GET_SUCCESS: 'categories/GET_SUCCESS',
};

/**
 * Reducer
 */
const INITIAL_STATE = {
  data: [],
  loading: false,
};

export default function categories(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      };
    default:
      return state;
  }
}

/**
 * Actions
 */
export const Creators = {
  getCategoriesRequest: () => ({ type: Types.GET_REQUEST }),

  getCategoriesSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  }),
};
