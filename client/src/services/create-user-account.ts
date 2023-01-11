import { AxiosRequestConfig } from 'axios';
import { ApiResponse } from '../models/api-response';
import { CreateUserAccount } from '../models/create-account';
import { callApi } from './api';

const apiServerUrl = process.env.REACT_APP_API_SERVER_URL + '/api';

export const createUserAccount = async (account: CreateUserAccount): Promise<ApiResponse> => {
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
