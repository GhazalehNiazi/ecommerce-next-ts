import { actionTypes } from "../actionTypes";

interface Cart {
  name: string;
  price: number;
  image: string;
  discount: number;
}

const initialState: { cart: Cart[] } = {
  cart: [],
};

const cartReducer = (
  state: { cart: Cart[] } = initialState,
  action: { type: string; payload: Cart }
) => {
  switch (action.type) {
    case actionTypes.ADD_PRODUCT:
      return {
        cart: state.cart.concat(action.payload),
      };
    default:
      return state;
  }
};
export default cartReducer;