export function formatModelLine(model: string, latencyMs: number): string {
  return `${model} (${latencyMs}ms)`;
}
