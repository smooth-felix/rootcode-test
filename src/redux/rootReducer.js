import { combineReducers } from '@reduxjs/toolkit';
import vehicleData from 'pages/api/vehicles.reducer';

const rootReducer = combineReducers({ vehicleData });

export default rootReducer;
