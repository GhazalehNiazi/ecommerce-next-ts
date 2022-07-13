import { actionTypes } from "../actionTypes";

interface Product {
  name: string;
  price: number;
  available: boolean;
  image: string;
  discount: number;
}

const initialState: { products: Product[] } = {
  products: [],
};

const productReducer = (
  state: { products: Product[] } = initialState,
  action: { type: string; payload: Product }
) => {
  switch (action.type) {
    case actionTypes.ADD_PRODUCT:
      return {
        products: state.products.concat(action.payload),
      };
    default:
      return state;
  }
};
export default productReducer;
