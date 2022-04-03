const fn = require('./fn');

// 이름과 나이를 담은 객체 반환.
test('이름과 나이를 전달받아서 객체를 반환해줘', () => {
  expect(fn.makeUser('Mike', 30)).toBe({ // 
    name: 'Mike',
    age: 30,
  });
});

test('이름과 나이를 전달받아서 객체를 반환해줘', () => {
  expect(fn.makeUser('Mike', 30)).toEqual({
    name: 'Mike',
    age: 30,
  });2
});

