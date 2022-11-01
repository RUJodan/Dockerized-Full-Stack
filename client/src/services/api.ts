import { AxiosRequestConfig } from 'axios';

import { ApiResponse } from '../models/api-response';
import { callExternalApi } from './external-api.service';

const apiServerUrl = process.env.REACT_APP_API_SERVER_URL + '/api';

async function callApi(config: AxiosRequestConfig) {
  const { data, error } = (await callExternalApi({ config })) as ApiResponse;

  return {
    data,
    error,
  };
}

export const getPublicResource = async (): Promise<ApiResponse> => {
  const config: AxiosRequestConfig = {
    url: `${apiServerUrl}/public`,
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  };

  return callApi(config);
};

export const getProtectedResource = async (
  accessToken: string | undefined,
): Promise<ApiResponse> => {
  const config: AxiosRequestConfig = {
    url: `${apiServerUrl}/protected`,
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
