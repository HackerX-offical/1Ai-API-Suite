const httpClient = require('../../core/http_client');
const config = require('../../config');
const historyManager = require('../../core/history_manager');

class ChatService {
  async sendMessage(message, options = {}) {
    const payload = {
      message,
      model: options.model || config.chat.model,
      conversationId: options.conversationId || config.chat.conversationId
    };

    try {
      // Assuming the config.api.baseUrl in .env is the FULL URL for this specific endpoint as per previous steps.
      // If the base URL was the domain, we'd use httpClient.post('/ai/chat', payload);
      // But based on previous context, the user provided a full URL in the script.
      // We will parse it to see if we need a path or use empty string if baseURL is the endpoint.
      
      const response = await httpClient.post('', payload);
      
      // Log success to history
      historyManager.saveInteraction(message, response.data, {
        status: response.status,
        model: payload.model
      });

      return response.data;
    } catch (error) {
       // Log failure to history
       historyManager.saveInteraction(message, error.response ? error.response.data : error.message, {
        status: error.response ? error.response.status : 'error',
        model: payload.model
      });
      throw error;
    }
  }
}

module.exports = new ChatService();
