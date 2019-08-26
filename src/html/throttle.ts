function throttle(callback: Function, limit: number) {
  let next = +new Date() + limit
  return (...args: any[]) => {
    const now = +new Date()
    if (now >= next) {
      next = now + limit
      return callback(...args)
    }
  }
}

function throttle2(callback: Function, limit: number) {
  let throttling = false
  const finishThrottling = () => (throttling = false)
  return (...args: any[]) => {
    if (!throttling) {
      throttling = true
      Reflect.apply(callback, undefined, args)
      setTimeout(finishThrottling, limit)
    }
  }
}

const throttledScroll = throttle2(() => console.log('move'), 1000)

document.body.addEventListener('mousemove', throttledScroll)
