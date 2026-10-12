import { loadConfig } from './load-config';

describe('loadConfig', () => {
  it('uses defaults when env empty', () => {
    const cfg = loadConfig({});
    expect(cfg.model).toContain('gemini');
    expect(cfg.timeout).toBe(30000);
  });

  it('reads overrides from env', () => {
    const cfg = loadConfig({ MODEL_ID: 'custom/model', AUTH_TOKEN: 't' });
    expect(cfg.model).toBe('custom/model');
    expect(cfg.token).toBe('t');
  });
});
