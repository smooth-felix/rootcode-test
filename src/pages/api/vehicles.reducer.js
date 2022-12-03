import { FETCH_VEHICLES, FETCH_VEHICLES_LOADING } from 'constants/actionTypes';

const initialState = {
  isLoading: false,
  vehicles: [],
};

// eslint-disable-next-line default-param-last
const vehiclesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_VEHICLES:
      return { ...state, vehicles: { ...state.vehicles, ...action.payload } };
    case FETCH_VEHICLES_LOADING:
      return { ...state, vehicles: { ...state.vehicles, isLoading: action.payload.isLoading } };
    default:
      return state;
  }
};

export default vehiclesReducer;
