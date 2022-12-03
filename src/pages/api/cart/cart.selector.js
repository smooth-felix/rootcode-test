import _get from 'lodash/get';

// return cart data main state
export const makeCartDataState = state => _get(state, 'shoppingCart');

// return cartItems
export const getCartItems = state => {
  const result = makeCartDataState(state);
  return result && result.items;
};

// return cart length
export const getCartItemNumber = state => {
  const result = makeCartDataState(state);
  return result && result.items.length;
};

// get the cart drawer visibility state
export const getDrawerVisibility = state => {
  const result = makeCartDataState(state);
  return result && result.drawerVisible;
};

// get the total value of the cart (total bids)
export const getTotalCartValue = state => {
  const result = makeCartDataState(state);
  const total = result.items.reduce((acc, obj) => { return acc + obj.bid; }, 0);
  return total;
};

// get the bid amount of a item
export const getCartItemPrice = itemId => state => {
  const result = makeCartDataState(state);
  const listItem = result?.items.find(item => item.id === itemId);
  return listItem?.bid;
};
