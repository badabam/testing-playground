import { commaSeparatedToArray } from './string'

describe('lib/string', () => {
  describe('commaSeparatedToArray', () => {
    it('returns ["a", "b"] for text "a,b"', () => {
      const result = commaSeparatedToArray('a,b')
      expect(result).toEqual(['a', 'b'])
    })

    it('returns ["a", "b"] for text "  a , b   "', () => {
      const result = commaSeparatedToArray('  a , b   ')
      expect(result).toEqual(['a', 'b'])
    })

    it('returns ["a b", "c"] for text "a b, c"', () => {
      const result = commaSeparatedToArray('a b, c')
      expect(result).toEqual(['a b', 'c'])
    })

    it('returns ["Jane", "John", "Joe"] for text "Jane, John,Joe"', () => {
      const result = commaSeparatedToArray('Jane, John,Joe')
      expect(result).toEqual(['Jane', 'John', 'Joe'])
    })

    it.todo('returns the array in ascending alphabetical order')
    it.todo('contains each string only once in the resulting array')
    it.todo('returns all items in title case ("john" -> "John")')
  })
})
