// @url https://leetcode.com/problems/jewels-and-stones/
/**
 * You're given strings J representing the types of stones that are jewels,
 * and S representing the stones you have.  Each character in S is a type
 * of stone you have.  You want to know how many of the stones you have are
 *  also jewels.
 * The letters in J are guaranteed distinct, and all characters in J and S
 * are letters. Letters are case sensitive, so "a" is considered a different
 * type of stone from "A".
 */
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J: string, S: string): number {
  const collection = J.split('').reduce(
    (res, jew) => {
      res[jew] = true
      return res
    },
    {} as { [k: string]: boolean },
  )

  return S.split('').reduce((res, s) => {
    if (collection[s]) res += 1
    return res
  }, 0)
}

test('number of jewels in stones', () => {
  expect(numJewelsInStones('aA', 'aAAbbbb')).toEqual(3)
  expect(numJewelsInStones('z', 'ZZ')).toEqual(0)
})
