const sizes = [100, 150, 300, 500, 700]

function callfunc(fn: (width: number) => void, args: number[], delay: number) {
  if (args.length) {
    setTimeout(() => {
      fn(args[0])
      callfunc(fn, args.slice(1), delay)
    }, delay)
  }
}

function change(width: number) {
  console.log('width', width)
}

// callfunc(change, sizes, 1000)
