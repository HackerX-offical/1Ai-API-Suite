import { redactToken } from './redact';

describe('redactToken', () => {
  it('masks middle of long tokens', () => {
    expect(redactToken('abcdefghijklmnop')).toMatch(/abcd…mnop/);
  });
});
