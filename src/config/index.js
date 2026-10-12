require('dotenv').config();

module.exports = {
  api: {
    baseUrl: process.env.API_URL || 'https://backend-1ai-554875599508.asia-south1.run.app/ai/chat',
    timeout: 30000,
  },
  auth: {
    token: process.env.AUTH_TOKEN,
  },
  chat: {
    model: process.env.MODEL_ID || 'google/gemini-2.5-flash',
    conversationId: process.env.CONVERSATION_ID,
  },
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'User-Agent': 'axios/1.x',
    Origin: 'https://1ai.co',
    Referer: 'https://1ai.co/',
  },
};
