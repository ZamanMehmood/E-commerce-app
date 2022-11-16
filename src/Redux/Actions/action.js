import { ADD_TO_CART, 
    REMOVE_TO_CART,
    SUB_QUANTITY,
    ADD_QUANTITY,
    EMPTY_CART,
    SET_PRODUCTS,
    UPDATE_ITEM_PRICE
 } from "./actionType";

export const setProducts = (arr)=>{
  return {
    type: SET_PRODUCTS,
    payload: arr
  }
}
  export const addToCart = (cartArr) => {
    return {
      type: ADD_TO_CART,
      payload: cartArr
    };
  };
  export const removTOeCart = (updatedArr) => {
    console.log("updated arry", updatedArr)
    return {
      type: REMOVE_TO_CART,
      payload: updatedArr
    };
  };
  export const subtractQuantity = (cartArr) => {
    return {
      type: SUB_QUANTITY,
      payload: cartArr
    };
  };
  export const addQuantity = (cartArr) => {
    return {
      type: ADD_QUANTITY,
      payload: cartArr
    };
  };
  export const updateItemPrice =(cartArr) => {
    return ({
      type: UPDATE_ITEM_PRICE,
      payload: cartArr
    });
  };