import { ApiErrorBody } from '../types/api';

export function formatApiError(status: number, body: ApiErrorBody): string {
  const msg = body.message || body.code || 'request failed';
  return `HTTP ${status}: ${msg}`;
}
