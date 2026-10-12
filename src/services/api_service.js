const axios = require('axios');
const config = require('../config');
const logger = require('../utils/logger');

class ApiService {
  constructor() {
    this.client = axios.create({
      baseURL: config.api.baseUrl, // Note: The URL in config is full path, but axios uses baseURL for relative.
      // Since we have a full URL in env, we'll just use it directly in the request or handle it here.
      // For this implementation, we'll assume the env var is the endpoint itself as per script.js
      headers: {
        ...config.headers,
        Authorization: `Bearer ${config.auth.token}`,
      },
    });
  }

  /**
   * Sends a chat message to the API
   * @param {string} message - The user message
   */
  async sendChatMessage(message = 'Hi') {
    const payload = {
      message,
      model: config.chat.model,
      conversationId: config.chat.conversationId,
    };

    logger.info('Sending Request...', { endpoint: config.api.baseUrl, model: payload.model });

    try {
      // Direct URL usage since the env var contains the full path
      const response = await this.client.post(config.api.baseUrl, payload);
      logger.info('Response Received:', response.data);
      return response.data;
    } catch (err) {
      logger.error('Request Failed', err);
      throw err;
    }
  }
}

module.exports = new ApiService();
