// 9:04pm

/**
 * 1-100
 * divisible by 3 - fizz
 * divisible by 5 buzz
 * divisible by 3&5 fizzbuzz
 * other number
 */
export function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    let s: number | string = i
    if (i % 3 === 0 && i % 5 === 0) {
      s = 'fizzbuzz'
    } else if (i % 3 === 0) {
      s = 'fizz'
    } else if (i % 5 === 0) {
      s = 'buzz'
    }
    console.log(s)
  }
}

// 9:08
// 4 minutes including writing the description

// 9:09
export function fizzBuzz2() {
  for (let i = 1; i <= 100; i++) {
    console.log(isFizzOrBuzz(i))
  }
}

function isFizzOrBuzz(n: number): string {
  if (n % 3 === 0 && n % 5 === 0) {
    return 'fizzbuzz'
  } else if (n % 3 === 0) {
    return 'fizz'
  } else if (n % 5 === 0) {
    return 'buzz'
  }

  return `${n}`
}

// 9:10 changed to return for no reason!
