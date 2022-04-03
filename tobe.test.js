const fn = require('./fn');

// toBeNUll
// toBeUndefined
// toBeDefined

test('null은 null입니다.', () => {
  expect(null).toBeNull();
});

test('1은 1이야', () => {
  expect(1).toBe(1);
})