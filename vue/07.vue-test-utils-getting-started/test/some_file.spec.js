import { dummy, SomeClass } from '../src/some_file';

describe('dummy', () => {
  test('dummy', () => {
    expect(dummy()).toBe('some dummy text');
  });
});

describe('SomeClass', () => {
  test('initialise', () => {
    const someVal = new SomeClass();
    expect(someVal.value).toBe(4);
  });

  test('moreVal', () => {
    const someVal = new SomeClass();
    expect(someVal.moarValue()).toBe(8);
  });
});
