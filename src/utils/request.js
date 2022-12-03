import axios from 'axios';
const makeRequest = async ({ method, url, onSuccess }) => {
  try {
    const response = await axios({ method, url });
    if (response) {
      const { data } = response;
      onSuccess({ data, isLoading: false });
    }
    // return response;
  } catch (error) {
    console.log(error);
    // return error;
  }
};

export default makeRequest;
