import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { ApiResponse } from '../models/api-response';

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
