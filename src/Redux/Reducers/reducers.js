import {createSelector} from 'reselect'

import { ADD_TO_CART,
    REMOVE_TO_CART,
    ADD_QUANTITY,
    SUB_QUANTITY,
    EMPTY_CART,
    SET_PRODUCTS,
    UPDATE_ITEM_PRICE
} from "../Actions/actionType";

const initialState = {
  products: [],
  cartArray: [],
  cartTotal: 0,
};
// console.log("initial state", initialState)
const ShoppingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
        return {
          ...state,
          products: action.payload
        };
    case ADD_TO_CART:
        console.log(action.payload) 
      return {
        ...state,
        cartArray: action.payload
      };
    case REMOVE_TO_CART:
      // console.log("Remve to cart")
      return {
        ...state,
        cartArray: action.payload,
      };
    case ADD_QUANTITY:
      return {
        ...state,
        cartArray: action.payload
      };
    case SUB_QUANTITY:
      return {
        ...state,
         cartArray: action.payload
      };
    case UPDATE_ITEM_PRICE:
      return {
        ...state,
         cartArray: action.payload
      };
    default:
      return state;
  }
};
export default ShoppingReducer;


// total payment work using reselect library

const selectShopppingReducer = state=>state?.ShoppingReducer;

export const selectCart = createSelector([selectShopppingReducer],(reducer)=>{
  return reducer?.cartArray
})

export const cartTotalSelector = createSelector([selectCart],(cart)=>{
  return cart?.reduce((total, item)=>total+item.price*item.quantity,0)
})