/**
 * Types
 */
export const Types = {
  GET_REQUEST: 'product/GET_REQUEST',
  GET_SUCCESS: 'product/GET_SUCCESS',
};

/**
 * Reducer
 */
const INITIAL_STATE = {
  data: {},
  loading: false,
};

export default function product(state = INITIAL_STATE, action) {
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
  getProductRequest: id => ({
    type: Types.GET_REQUEST,
    payload: { id },
  }),

  getProductSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  }),
};
