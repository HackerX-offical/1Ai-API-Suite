export function defaultApiHeaders(token?: string): Record<string, string> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'User-Agent': 'axios/1.x',
    Origin: 'https://1ai.co',
    Referer: 'https://1ai.co/',
  };
  if (token) headers.Authorization = `Bearer ${token}`;
  return headers;
}
