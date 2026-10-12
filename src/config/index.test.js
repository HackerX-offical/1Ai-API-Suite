const config = require('./index');

describe('config', () => {
  it('exposes api and chat defaults', () => {
    expect(config.api.baseUrl).toMatch(/^https?:\/\//);
    expect(config.chat.model).toBeTruthy();
    expect(config.headers['Content-Type']).toBe('application/json');
  });
});
