import { AppError } from './app-error';

export interface ApiResponse {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Record<string, any> | null;
  error: AppError | null;
}
