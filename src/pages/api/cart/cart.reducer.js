import { SET_SHOPPING_CART, CLEAR_SHOPPING_CART, REMOVE_FROM_CART, CART_DRAWER_VISIBILITY } from 'constants/actionTypes';

const initialState = {
  items: [],
};

// eslint-disable-next-line default-param-last
const vehiclesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SHOPPING_CART:
      return { ...state, items: [...state.items, ...action.payload] };
    case CLEAR_SHOPPING_CART:
      return { ...state, items: [] };
    case REMOVE_FROM_CART:
      return { ...state, items: state.items.filter(item => item.id !== action.payload.itemId) };
    case CART_DRAWER_VISIBILITY:
      return { ...state, drawerVisible: action.payload.visibility };
    default:
      return state;
  }
};

export default vehiclesReducer;
