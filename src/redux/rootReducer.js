import { combineReducers } from '@reduxjs/toolkit';
import vehicleData from 'pages/api/vehicle/vehicles.reducer';
import shoppingCart from 'pages/api/cart/cart.reducer';

const rootReducer = combineReducers({ vehicleData, shoppingCart });

export default rootReducer;
