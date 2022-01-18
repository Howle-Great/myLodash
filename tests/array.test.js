import * as matchers from 'jest-extended';
expect.extend(matchers);

import { chunk } from '../src/array.js'

test('Is the tests works?', () => {
  expect(chunk([1,2,3,4,5], 2)).toIncludeSameMembers([[1,2],[3,4],[5]])
})

test('Is the tests works?', () => {
  expect(chunk([1,2,3,4], 2)).toIncludeSameMembers([[1,2],[3,4]])
})