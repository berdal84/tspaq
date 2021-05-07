import { add, mult } from '../src/index'

test('add', () => {
  expect( add(2,3)).toBe(2+3);
});

test('mult', () => {
  expect( mult(12,3)).toBe(12*3);
  expect( mult(12,-3)).toBe(-12*3);
});