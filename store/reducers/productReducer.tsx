import { actionTypes } from "../actionTypes";

type Product = {
  id: number;
  name: string;
  genre: string;
  available: number;
  stock: boolean;
  discount: number;
  price: number;
  colors?: string[];
  size?: string[];
  img: string;
};

const initialState: { products: Product[] } = {
  products: [],
};

const productReducer = (
  state: { products: Product[] } = initialState,
  action: { type: string; payload: Product }
) => {
  switch (action.type) {
    case actionTypes.SET_PRODUCT:
      console.log('pid pidnvdkjnvksnvlksnvlks')
      return {
        products: state.products.concat(action.payload),
      };
    default:
      return state;
  }
};
export default productReducer;
