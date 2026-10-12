export interface AppConfig {
  baseUrl: string;
  timeout: number;
  token?: string;
  model: string;
  conversationId?: string;
}

export function loadConfig(env: NodeJS.ProcessEnv = process.env): AppConfig {
  return {
    baseUrl: env.API_URL || 'https://backend-1ai-554875599508.asia-south1.run.app/ai/chat',
    timeout: 30000,
    token: env.AUTH_TOKEN,
    model: env.MODEL_ID || 'google/gemini-2.5-flash',
    conversationId: env.CONVERSATION_ID,
  };
}
