import { isClickableElement } from './is-clickable-element';

describe('isClickableElement', () => {
  it('should exist', () => {
    expect(isClickableElement).toBeDefined();
  });

  it('should return false for non-clickable element', () => {
    const tagName = 'div';

    expect(
      isClickableElement({
        tagName,
      })
    ).toBe(false);
  });

  it('should return true for <a> tag', () => {
    const tagName = 'a';

    expect(
      isClickableElement({
        tagName,
      })
    ).toBe(true);
  });

  it('should return true for <button> tag', () => {
    const tagName = 'button';

    expect(
      isClickableElement({
        tagName,
      })
    ).toBe(true);
  });

  it('should return true for <input> tag, which type is button', () => {
    const tagName = 'input';
    const type = 'button';

    expect(
      isClickableElement({
        tagName,
        type,
      })
    ).toBe(true);
  });

  it('should return true for <input> tag, which type is checkbox', () => {
    const tagName = 'input';
    const type = 'checkbox';

    expect(
      isClickableElement({
        tagName,
        type,
      })
    ).toBe(true);
  });

  it('should return true for <input> tag, which type is password', () => {
    const tagName = 'input';
    const type = 'password';

    expect(
      isClickableElement({
        tagName,
        type,
      })
    ).toBe(true);
  });

  it('should return true for <input> tag, which type is radio', () => {
    const tagName = 'input';
    const type = 'radio';

    expect(
      isClickableElement({
        tagName,
        type,
      })
    ).toBe(true);
  });

  it('should return true for <input> tag, which type is range', () => {
    const tagName = 'input';
    const type = 'range';

    expect(
      isClickableElement({
        tagName,
        type,
      })
    ).toBe(true);
  });

  it('should return true for <input> tag, which type is reset', () => {
    const tagName = 'input';
    const type = 'reset';

    expect(
      isClickableElement({
        tagName,
        type,
      })
    ).toBe(true);
  });

  it('should return true for <input> tag, which type is submit', () => {
    const tagName = 'input';
    const type = 'submit';

    expect(
      isClickableElement({
        tagName,
        type,
      })
    ).toBe(true);
  });

  it('should return false for <input> tag, which type is text', () => {
    const tagName = 'input';
    const type = 'text';

    expect(
      isClickableElement({
        tagName,
        type,
      })
    ).toBe(false);
  });

  it('should return false for <input> tag, which type is hidden', () => {
    const tagName = 'input';
    const type = 'hidden';

    expect(
      isClickableElement({
        tagName,
        type,
      })
    ).toBe(false);
  });

  it('should return false for <input> tag, which type is image', () => {
    const tagName = 'input';
    const type = 'image';

    expect(
      isClickableElement({
        tagName,
        type,
      })
    ).toBe(false);
  });

  it('should return false for <input> tag, which type is not passed', () => {
    const tagName = 'input';

    expect(
      isClickableElement({
        tagName,
      })
    ).toBe(false);
  });

  it('should return false when arguments are not passed', () => {
    expect(isClickableElement()).toBe(false);
  });

  it('should return false when arguments are incorrect', () => {
    expect(isClickableElement({})).toBe(false);
    expect(isClickableElement(undefined)).toBe(false);
    expect(isClickableElement(0)).toBe(false);
    expect(isClickableElement('string')).toBe(false);
    expect(isClickableElement([])).toBe(false);
    expect(isClickableElement(true)).toBe(false);
  });

  it('should return false when options object is null', () => {
    expect(isClickableElement(null)).toBe(false);
  });
});
