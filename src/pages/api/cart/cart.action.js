import { notification } from 'antd';
import { SET_SHOPPING_CART, CLEAR_SHOPPING_CART, REMOVE_FROM_CART, CART_DRAWER_VISIBILITY } from 'constants/actionTypes';

// insert a new item into the shopping cart
export const setShoppingCart = cartItem => dispatch => {
  dispatch({
    type: SET_SHOPPING_CART,
    payload: [cartItem],
  });
  notification.success({
    message: 'Added the bidding to the list',
    description: 'Successfully added the new item to the bidding list',
  });
};

// set the card drawer visibility
export const setCartDrawerVisibility = visibility => dispatch => {
  dispatch({
    type: CART_DRAWER_VISIBILITY,
    payload: { visibility },
  });
};

// clear the shopping cart list
export const clearShoppingCart = payload => dispatch => {
  dispatch({
    type: CLEAR_SHOPPING_CART,
  });
};

// remove item from the cart
export const removeFromCart = itemId => dispatch => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: { itemId },
  });
};
