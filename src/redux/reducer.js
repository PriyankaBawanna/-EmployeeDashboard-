import { ADD_TO_CART } from "./constant";
export const userData = (data = [], action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TO_CART:
      return [action.data, ...data];
    default:
      //no case match
      return data;
  }
};
