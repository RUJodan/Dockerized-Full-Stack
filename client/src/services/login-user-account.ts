import { AxiosRequestConfig } from 'axios';
import { ApiResponse } from '../models/api-response';
import { Login } from '../models/login';
import { callApi } from './api';

const apiServerUrl = process.env.REACT_APP_API_SERVER_URL + '/api';

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
