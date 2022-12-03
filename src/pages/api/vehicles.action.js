import { FETCH_VEHICLES, FETCH_VEHICLES_LOADING } from 'constants/actionTypes';
import makeRequest from 'utils/request';

// handle fetch loading state for course fetch request
export const fetchingVehicles = (isLoading = true) => dispatch => {
  dispatch({
    type: FETCH_VEHICLES_LOADING,
    payload: {
      isLoading,
    },
  });
};

// handle response of the vehicles fetch request
export const setVehiclesFetch = response => dispatch => {
  const { isLoading, data } = response;
  dispatch({
    type: FETCH_VEHICLES,
    payload: {
      isLoading,
      data,
    },
  });
};

// handle courses fetch request
export const fetchVehiclesData = payload => dispatch => {
  dispatch(fetchingVehicles());

  const feedReducer = response => {
    dispatch(setVehiclesFetch(response));
  };

  const params = payload.queryParams;

  const queryString = Object.keys(params).length !== 0 ? `?${Object.keys(params).map(key => `${key}=${params[key]}`).join('&')}` : '';

  const requestOptions = {
    url: `${process.env.REACT_APP_BASE_URL}vehicles${queryString}`,
    method: 'GET',
    onSuccess: feedReducer,
  };

  makeRequest(requestOptions);
};
