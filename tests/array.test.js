import * as matchers from 'jest-extended';
expect.extend(matchers);

import {
  chunk,
  compact
} from '../src/array.js'

describe('chunk()', () => {
  test('Chunk with unpaired array', () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toIncludeSameMembers([[1, 2], [3, 4], [5]])
  })
  
  test('Chunk with paired array', () => {
    expect(chunk([1, 2, 3, 4], 2)).toIncludeSameMembers([[1, 2], [3, 4]])
  })
  
  test('Zero chunk size', () => {
    expect(chunk([1, 2, 3, 4], 0)).toIncludeSameMembers([])
  })
  
  test('Default chunk size', () => {
    expect(chunk([1, 2, 3, 4])).toIncludeSameMembers([[1], [2], [3], [4]])
  })
  
  test('Negative chunk size', () => {
    expect(chunk([1, 2, 3, 4], -1)).toIncludeSameMembers([])
  })
})

describe('compact()', () => {
  test('Array with false', () => {
    expect(compact([1, false, 3])).toIncludeSameMembers([1, 3])
  })
  
  test('Array with null', () => {
    expect(compact([1, null, 3])).toIncludeSameMembers([1, 3])
  })
  
  test('Array with 0', () => {
    expect(compact([1, 0, 3])).toIncludeSameMembers([1, 3])
  })
  
  test('Array with ""', () => {
    expect(compact([1, "", 3])).toIncludeSameMembers([1, 3])
  })
  
  test('Array with undefined', () => {
    expect(compact([1, undefined, 3])).toIncludeSameMembers([1, 3])
  })

  test('Array with NaN', () => {
    expect(compact([1, NaN, 3])).toIncludeSameMembers([1, 3])
  })

  test('Array with all falsey objects', () => {
    expect(compact([0, 1, false, 2, '', 3])).toIncludeSameMembers([1, 2, 3])
  })
})