test('should work', () => {
  const f = jest.fn();

  f('foo');
  f('baz');

  expect(f).toHaveBeenNthCalledWith(1, 'foo');
  expect(f).toHaveBeenNthCalledWith(2, 'baz');
  expect(f).toHaveBeenNthCalledWith(3, 'fail');
});