import _get from 'lodash/get';

// return vehiclesData main state
export const makeVehiclesDataState = state => _get(state, 'vehicleData.vehicles');

// return vehicles
export const getVehicles = state => {
  const result = makeVehiclesDataState(state);
  return result && result.data;
};

// return vehicles loading
export const getVehiclesLoading = state => {
  const result = makeVehiclesDataState(state);
  return result && result.isLoading;
};
