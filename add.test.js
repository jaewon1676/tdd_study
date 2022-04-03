const fn = require('./fn');

// 두 수 더하여 반환
test('1과 2를 더하면 3이다.', () => {
  expect(fn.add(1, 2)).toBe(3); // true
});

test('2와 3을 더하면 5이다.', () => {
  expect(fn.add(2, 3)).toBe(5); // true
});

test('3와 3을 더하면 5가 아니다.', () => {
  expect(fn.add(3, 3)).not.toBe(5);
});

