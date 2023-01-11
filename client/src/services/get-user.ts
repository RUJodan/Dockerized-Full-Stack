import { AxiosRequestConfig } from 'axios';
import { ApiResponse } from '../models/api-response';
import { callApi } from './api';

const apiServerUrl = process.env.REACT_APP_API_SERVER_URL + '/api';

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
