import { defaultApiHeaders } from './headers';

describe('defaultApiHeaders', () => {
  it('adds bearer when token provided', () => {
    expect(defaultApiHeaders('abc').Authorization).toBe('Bearer abc');
  });
});
