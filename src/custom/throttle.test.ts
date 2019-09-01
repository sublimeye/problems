import throttle from 'lodash/throttle'

// function throttle (fn: Function, limit: number) {

// }

describe('throttle', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })
  it('should throttle calls', () => {
    const callback = jest.fn()
    const throttled = throttle(callback, 100)
    throttled()
    throttled()
    throttled()
    expect(callback).toHaveBeenCalledTimes(1)
    jest.advanceTimersByTime(200)
    throttled()
    jest.advanceTimersByTime(200)
    throttled()
    expect(callback).toHaveBeenCalledTimes(2)
    jest.advanceTimersByTime(300)
    throttled()
    throttled()
    expect(callback).toHaveBeenCalledTimes(3)
  })
})
