import { AxiosRequestConfig } from 'axios';
import { ApiResponse } from '../models/api-response';
import { callApi } from './api';

const apiServerUrl = process.env.REACT_APP_API_SERVER_URL + '/api';

export const logoutUserAccount = async (): Promise<ApiResponse> => {
  const config: AxiosRequestConfig = {
    url: `${apiServerUrl}/logout`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return callApi(config);
};
