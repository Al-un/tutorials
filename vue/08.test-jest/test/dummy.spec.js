import { func, SomeClass } from '../src/lib/dummy';

describe('func', () => {
  test('returns text', () => {
    expect(func()).toBe('some text');
  });
});

describe('SomeClass', () => {
  test('init', () => {
    const pouet = new SomeClass();
    expect(pouet.value).toBe(4);
  });

  test('moarValue', () => {
    const pouet = new SomeClass();
    expect(pouet.moarValue()).toBe(6);
  });
});
