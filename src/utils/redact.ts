export function redactToken(token: string | undefined, visible = 4): string {
  if (!token) return '(none)';
  if (token.length <= visible * 2) return '***';
  return `${token.slice(0, visible)}…${token.slice(-visible)}`;
}
