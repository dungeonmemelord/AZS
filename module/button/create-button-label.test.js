import { createButtonLabel } from './create-button-label';

describe('createButtonLabel()', () => {
  it('should exist', () => {
    expect(createButtonLabel).toBeDefined();
  });

  it('should return a string', () => {
    expect(typeof createButtonLabel('a-button-name')).toBe('string');
  });

  it('should return a label with advantage word', () => {
    const label = createButtonLabel('advantage');

    expect(label).toContain('advantage');
  });

  it('should return a label with normal word', () => {
    const label = createButtonLabel('normal');

    expect(label).toContain('normal');
  });

  it('should return a label with disadvantage word', () => {
    const label = createButtonLabel('disadvantage');

    expect(label).toContain('disadvantage');
  });

  it('should throw error when button name has new line', () => {
    expect(() => createButtonLabel('\nname\n')).toThrowError(
      'Invalid button name'
    );
  });

  it('should throw an error when button name has spaces', () => {
    expect(() => createButtonLabel('a button name')).toThrowError(
      'Invalid button name'
    );
  });

  it('should throw an error when button name is falsy', () => {
    expect(() => createButtonLabel('')).toThrowError('Invalid button name');
    expect(() => createButtonLabel(null)).toThrowError('Invalid button name');
    expect(() => createButtonLabel(undefined)).toThrowError(
      'Invalid button name'
    );
    expect(() => createButtonLabel(false)).toThrowError('Invalid button name');
    expect(() => createButtonLabel([])).toThrowError('Invalid button name');
    expect(() => createButtonLabel(0)).toThrowError('Invalid button name');
    expect(() => createButtonLabel(NaN)).toThrowError('Invalid button name');
  });
});
