import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item =>({
  type: CartActionTypes.Add_Item,
  payload: item
});

export const ClearItemFromCart = item =>({
  item: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item
});

export const removeItem = item => ({
  item: CartActionTypes.Remove_Item,
  payload: item
});