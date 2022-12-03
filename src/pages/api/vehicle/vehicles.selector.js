import _get from 'lodash/get';

// return vehiclesData main state
export const makeVehiclesDataState = state => _get(state, 'vehicleData');

// return vehicles
export const getVehicles = state => {
  const result = makeVehiclesDataState(state);
  return result && result.vehicles.data;
};

// return vehicles loading
export const getVehiclesLoading = state => {
  const result = makeVehiclesDataState(state);
  return result && result.vehicles.isLoading;
};

// get Selected Vehicle
export const getSelectedVehicle = state => {
  const result = makeVehiclesDataState(state);
  return result && { name: result.selectedVehicle.vehicle.name, ...result.selectedVehicle.vehicle.details };
};

// get Modal Visibility
export const getModalVisibility = state => {
  const result = makeVehiclesDataState(state);
  return result && result.selectedVehicle.isModalVisible;
};
