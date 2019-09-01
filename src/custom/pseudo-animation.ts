const sizes = [100, 150, 300, 500, 700]

function callfunc(fn: (width: number) => void, args: number[], delay: number) {
  if (args.length) {
    setTimeout(() => {
      fn(args[0])
      callfunc(fn, args.slice(1), delay)
    }, delay)
  }
}

const sizesp = sizes.map(n => () =>
  new Promise(resolve => {
    setTimeout(() => {
      change(n)
      resolve()
    }, n)
  }),
)

sizesp.reduce((promise, next) => promise.then(next), Promise.resolve({}))

function change(width: number) {
  console.log('width', width)
}

// callfunc(change, sizes, 1000)
