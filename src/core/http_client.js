const axios = require('axios');
const { v4: uuidv4 } = require('uuid');
const config = require('../config');
const logger = require('../utils/logger');

class HttpClient {
  constructor() {
    this.client = axios.create({
      baseURL: config.api.baseUrl,
      timeout: config.api.timeout,
      headers: config.headers
    });

    this._setupInterceptors();
  }

  _setupInterceptors() {
    // Request Interceptor
    this.client.interceptors.request.use(
      (req) => {
        req.metadata = { startTime: new Date(), requestId: uuidv4() };
        logger.debug(`[${req.metadata.requestId}] Outgoing Request: ${req.method.toUpperCase()} ${req.url}`);
        
        // Dynamic Token Injection
        const token = config.auth.token;
        if (token) {
          req.headers['Authorization'] = `Bearer ${token}`;
        }
        return req;
      },
      (error) => Promise.reject(error)
    );

    // Response Interceptor
    this.client.interceptors.response.use(
      (res) => {
        const duration = new Date() - res.config.metadata.startTime;
        logger.debug(`[${res.config.metadata.requestId}] Response: ${res.status} (${duration}ms)`);
        return res;
      },
      (error) => {
        const duration = error.config ? new Date() - error.config.metadata.startTime : 0;
        logger.error(`Request Failed after ${duration}ms`, error);
        return Promise.reject(error);
      }
    );
  }

  async get(url, params = {}) {
    return this.client.get(url, { params });
  }

  async post(url, data = {}) {
    return this.client.post(url, data);
  }
}

module.exports = new HttpClient();
