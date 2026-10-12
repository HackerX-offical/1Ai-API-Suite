import { buildChatPayload } from './payload';

describe('buildChatPayload', () => {
  it('includes conversation id when set', () => {
    const p = buildChatPayload('hi', 'm', 'conv-1');
    expect(p.conversationId).toBe('conv-1');
  });
});
