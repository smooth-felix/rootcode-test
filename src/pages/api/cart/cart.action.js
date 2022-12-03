import { notification } from 'antd';
import { SET_SHOPPING_CART, CLEAR_SHOPPING_CART, REMOVE_FROM_CART, CART_DRAWER_VISIBILITY } from 'constants/actionTypes';

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

export const setCartDrawerVisibility = visibility => dispatch => {
  dispatch({
    type: CART_DRAWER_VISIBILITY,
    payload: { visibility },
  });
};

export const clearShoppingCart = payload => dispatch => {
  dispatch({
    type: CLEAR_SHOPPING_CART,
  });
};

export const removeFromCart = itemId => dispatch => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: { itemId },
  });
};
