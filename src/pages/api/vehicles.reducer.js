import { CLEAR_SELECTED_VEHICLE, FETCH_VEHICLES, FETCH_VEHICLES_LOADING, SET_SELECTED_VEHICLE } from 'constants/actionTypes';

const initialState = {
  isLoading: false,
  vehicles: [],
  selectedVehicle: {
    vehicle: {},
    isModalVisible: false,
  },
};

// eslint-disable-next-line default-param-last
const vehiclesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_VEHICLES:
      return { ...state, vehicles: { ...state.vehicles, ...action.payload } };
    case FETCH_VEHICLES_LOADING:
      return { ...state, vehicles: { ...state.vehicles, isLoading: action.payload.isLoading } };
    case SET_SELECTED_VEHICLE:
      return { ...state, selectedVehicle: { ...action.payload } };
    case CLEAR_SELECTED_VEHICLE:
      return { ...state, selectedVehicle: { vehicle: {}, isModalVisible: false } };
    default:
      return state;
  }
};

export default vehiclesReducer;
