import { describe, expect, it } from 'vitest'
import { sum } from '../src'

describe('should', () => {
  it('exported', () => {
    expect(sum(1, 3)).toEqual(4)
  })
})
