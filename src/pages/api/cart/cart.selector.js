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

export const getCartItemPrice = itemId => state => {
  const result = makeCartDataState(state);
  const listItem = result?.items.find(item => item.id === itemId);
  return listItem?.bid;
};

// // get Selected Vehicle
// export const getSelectedVehicle = state => {
//   const result = makeVehiclesDataState(state);
//   return result && result.selectedVehicle.vehicle;
// };

// // get Modal Visibility
// export const getModalVisibility = state => {
//   const result = makeVehiclesDataState(state);
//   return result && result.selectedVehicle.isModalVisible;
// };
