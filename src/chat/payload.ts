export interface ChatMessagePayload {
  message: string;
  model: string;
  conversationId?: string;
}

export function buildChatPayload(message: string, model: string, conversationId?: string): ChatMessagePayload {
  return { message, model, conversationId };
}
