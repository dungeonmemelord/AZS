import { doRoll } from './do-roll';

describe('doRoll', () => {
  it('should exist', () => {
    expect(doRoll).toBeDefined();
  });

  it('should roll the dice with given formula', async () => {
    const formula = 'd20';

    const result = await doRoll({ formula });

    expect(result).toBeLessThanOrEqual(20);
  });
});
