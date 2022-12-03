import { notification } from 'antd';
import { SET_SHOPPING_CART, CLEAR_SHOPPING_CART, REMOVE_FROM_CART } from 'constants/actionTypes';

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
