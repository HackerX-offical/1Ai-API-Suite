export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export interface ApiErrorBody {
  message?: string;
  code?: string;
}
