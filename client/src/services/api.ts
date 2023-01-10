import axios, { AxiosRequestConfig } from 'axios';
import { toast } from 'react-toastify';
import { callExternalApi } from './external-api.service';

// models
import { User } from '../models/user';
import { ApiResponse } from '../models/api-response';
import { Login } from '../models/login';

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
        const newToken = await refreshAccessToken();
        localStorage.setItem('user', JSON.stringify(newToken.data));

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

async function callApi(config: AxiosRequestConfig) {
  const { data, error } = (await callExternalApi({ config })) as ApiResponse;

  return {
    data,
    error,
  };
}

export const refreshAccessToken = async (): Promise<ApiResponse> => {
  const config: AxiosRequestConfig = {
    url: `${apiServerUrl}/refresh`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return callApi(config);
};

export const createUserAccount = async (account: User): Promise<ApiResponse> => {
  const config: AxiosRequestConfig = {
    url: `${apiServerUrl}/create-account`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      account,
    },
  };

  return callApi(config);
};

export const loginUserAccount = async (login: Login): Promise<ApiResponse> => {
  const config: AxiosRequestConfig = {
    url: `${apiServerUrl}/login`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      login,
    },
  };

  return callApi(config);
};

export const getPublicResource = async (accessToken: string | null): Promise<ApiResponse> => {
  const config: AxiosRequestConfig = {
    url: `${apiServerUrl}/public`,
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  };

  return callApi(config);
};

export const getUser = async (
  userId: string | undefined,
  accessToken: string | undefined,
): Promise<ApiResponse> => {
  const config: AxiosRequestConfig = {
    url: `${apiServerUrl}/users/${userId}`,
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  };

  return callApi(config);
};

export const verifyGoogleToken = async (accessToken: string): Promise<ApiResponse> => {
  const config: AxiosRequestConfig = {
    url: `${apiServerUrl}/login`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      token: accessToken,
    },
  };

  return callApi(config);
};
