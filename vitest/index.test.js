import { expect, test, vi } from 'vitest';

test('should work', () => {
  const f = vi.fn();

  f('foo');
  f('baz');

  expect(f).toHaveBeenNthCalledWith(1, 'foo');
  expect(f).toHaveBeenNthCalledWith(2, 'baz');
  expect(f).toHaveBeenNthCalledWith(3, 'fail');
});