// https://leetcode.com/problems/subdomain-visit-count/
/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains: string[]) {
  const dmap = cpdomains.reduce(
    (res, domain) => {
      let [count, d] = domain.split(' ')
      const c = parseInt(count)

      const sub = d.split('.')
      while (sub.length) {
        const s = sub.join('.')
        res[s] = res[s] ? res[s] + c : c
        sub.shift()
      }

      return res
    },
    {} as { [k: string]: number },
  )
  return Object.entries(dmap).map(([d, c]) => `${c} ${d}`)
}

test('push dominoes', () => {
  const out = subdomainVisits([
    '900 google.mail.com',
    '50 yahoo.com',
    '1 intel.mail.com',
    '5 wiki.org',
  ]).sort()
  const exp = [
    '901 mail.com',
    '50 yahoo.com',
    '900 google.mail.com',
    '5 wiki.org',
    '5 org',
    '1 intel.mail.com',
    '951 com',
  ].sort()
  expect(out).toEqual(exp)
})
