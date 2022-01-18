import * as matchers from 'jest-extended';
expect.extend(matchers);

import { chunk } from '../src/array.js'

describe('chunk()', () => {
  test('Chunk with unpaired array', () => {
    expect(chunk([1,2,3,4,5], 2)).toIncludeSameMembers([[1,2],[3,4],[5]])
  })
  
  test('Chunk with paired array', () => {
    expect(chunk([1,2,3,4], 2)).toIncludeSameMembers([[1,2],[3,4]])
  })
  
  test('Zero chunk size', () => {
    expect(chunk([1,2,3,4], 0)).toIncludeSameMembers([])
  })
  
  test('Default chunk size', () => {
    expect(chunk([1,2,3,4])).toIncludeSameMembers([[1], [2], [3], [4]])
  })
  
  test('Negative chunk size', () => {
    expect(chunk([1,2,3,4], -1)).toIncludeSameMembers([])
  })
})
