import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';

// models
import { ApiResponse } from '../models/api-response';

const apiServerUrl = process.env.REACT_APP_API_SERVER_URL + '/api';

// handle interceptor for access_token refreshing
axios.defaults.withCredentials = true;
axios.interceptors.response.use(
  (response) => {
    // Any status code from range of 2xx
    return response;
  },
  async (error) => {
    const originalConfig = error.config;
    // 403 === access token expired, try refresh token
    if (error.response.status === 403 && !originalConfig._retry) {
      originalConfig._retry = true;
      try {
        const config: AxiosRequestConfig = {
          url: `${apiServerUrl}/refresh`,
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        };
        const newToken = await callApi(config);
        localStorage.setItem('session', JSON.stringify(newToken.data));

        // retry original request with new access_token
        // create new axios instance to avoid infinite loop of retries
        const newAxios = axios.create();
        return newAxios(originalConfig);
      } catch (error) {
        return Promise.reject(error);
      }
    } else if (error.response.status === 401) {
      // refresh token expired, redirect to login
      toast('Your session has expired, please log in.');
    }

    return Promise.reject(error);
  },
);

export const callExternalApi = async (options: {
  config: AxiosRequestConfig;
}): Promise<ApiResponse> => {
  try {
    const response: AxiosResponse = await axios(options.config);
    const { data } = response;

    return {
      data,
      error: null,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const { response } = error;

      let message = 'HTTP Request Failed';
      let status = null;

      if (response && response.status) {
        status = response.status;
      }

      if (response && response.data && response.data.error) {
        message = response.data.error;
      }

      return {
        data: null,
        error: {
          message,
          status,
        },
      };
    }

    return {
      data: null,
      error: {
        message: 'An unknown HTTP error has occurred.',
        status: null,
      },
    };
  }
};

export async function callApi(config: AxiosRequestConfig) {
  const { data, error } = (await callExternalApi({ config })) as ApiResponse;

  return {
    data,
    error,
  };
}
