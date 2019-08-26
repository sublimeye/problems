/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails: string[]): number {
  // build a hash of clear emails
  // return number of keys
  const d: { [s: string]: string } = {}
  // ways to clear local name
  // 1. regexp: easy~ish to read, might be inefficient
  // 2. manual string modification - iterate until @ reached
  for (let email of emails) {
    let entry: string[] = []
    let skip = false
    for (let c = 0; c < email.length; c++) {
      if (email[c] === '.' || (skip && email[c] !== '@')) {
        continue
      } else if (email[c] === '+') {
        skip = true
        continue
      }

      if (email[c] === '@') {
        entry.push(email.substring(c))
        break
      } else {
        entry.push(email[c])
      }
    }
    const e = entry.join('')
    d[e] = e
  }

  return Object.keys(d).length
}

test('unique email address', () => {
  expect(
    numUniqueEmails([
      'test.email+alex@leetcode.com',
      'test.e.mail+bob.cathy@leetcode.com',
      'testemail+david@lee.tcode.com',
    ]),
  ).toEqual(2)
})
