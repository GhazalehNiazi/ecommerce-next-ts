import { actionTypes } from "../actionTypes";

export const addProduct = (product: string[]) => {
  return {
    type: actionTypes.ADD_PRODUCT,
    payload: product,
  };
};
export const setProduct = (product: string[]) => {
  return {
    type: actionTypes.SET_PRODUCT,
    payload: product,
  };
};
