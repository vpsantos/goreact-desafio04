/**
 * Types
 */
export const Types = {
  ADD_PRODUCT: 'cart/ADD_PRODUCT',
  REMOVE_PRODUCT: 'cart/REMOVE_PRODUCT',
  UPDATE_PRODUCT: 'cart/UPDATE_PRODUCT',
};

/**
 * Reducer
 */
const INITIAL_STATE = {
  data: [],
};

export default function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_PRODUCT: {
      const index = state.data.findIndex(product => product.id === action.payload.product.id);

      if (index !== -1) {
        const { data } = state;
        const quantity = data[index].quantity + 1;

        data[index].quantity = quantity;
        data[index].subtotal = data[index].price * quantity;

        return { data };
      }

      const { product } = action.payload;
      product.quantity = 1;
      product.subtotal = product.price;

      return { data: [...state.data, product] };
    }
    case Types.REMOVE_PRODUCT: {
      return { data: state.data.filter(product => product.id !== action.payload.product.id) };
    }
    case Types.UPDATE_PRODUCT: {
      if (!action.payload.quantity) {
        return state;
      }

      const index = state.data.findIndex(product => product.id === action.payload.id);

      const { data } = state;

      data[index].quantity = action.payload.quantity;
      data[index].subtotal = data[index].price * action.payload.quantity;

      return { data };
    }
    default:
      return state;
  }
}

/**
 * Actions
 */
export const Creators = {
  addProduct: product => ({
    type: Types.ADD_PRODUCT,
    payload: { product },
  }),

  removeProduct: product => ({
    type: Types.REMOVE_PRODUCT,
    payload: { product },
  }),

  updateProduct: (id, quantity) => ({
    type: Types.UPDATE_PRODUCT,
    payload: { id, quantity },
  }),
};
