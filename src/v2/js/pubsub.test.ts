// subscription returns unsubscribe
// subscribe by topic and callback
// unsubscribe by topic - remove all subscriptions for that topic
// unsubscribe by "returned function" only removes the function
// optimize by putting subscriptions into buckets "topics"

type unsubscribeFn = () => void
type handler = (topic: string, payload: object) => void

interface IPubsub {
  subscribe(topic: string, handler: handler): unsubscribeFn
  publish(topic: string, payload: object): void
}

class Pubsub implements IPubsub {
  private idx = 0
  private listeners: Map<string, Map<number, handler>> = new Map()

  subscribe(topic: string, handler: handler) {
    this.idx++

    // any topic handlers?
    if (!this.listeners.has(topic)) {
      this.listeners.set(topic, new Map())
    }

    const handlers = this.listeners.get(topic)
    if (!handlers) {
      throw new Error('typescript why?')
    }

    handlers.set(this.idx, handler)

    return () => {
      handlers.delete(this.idx)
    }
  }

  publish(topic: string, payload: object) {
    const handlers = this.listeners.get(topic)
    if (handlers) {
      handlers.forEach(handler => {
        handler(topic, payload)
      })
    }
  }
}

type topic = string
type PubsubState = {
  index: number
  listeners: Map<topic, Map<number, handler>>
}
function makePubsub(): PubsubState {
  return {
    index: 0,
    listeners: new Map(),
  }
}
function subscribePubsub(
  ps: PubsubState,
  topic: topic,
  handler: handler,
): unsubscribeFn {
  ps.index++

  if (!ps.listeners.has(topic)) {
    ps.listeners.set(topic, new Map())
  }

  const listeners = ps.listeners.get(topic)
  if (!listeners) {
    throw new Error('Unreal')
  }

  listeners.set(ps.index, handler)

  return () => {
    listeners.delete(ps.index)
  }
}
function publishPubsub(ps: PubsubState, topic: topic, payload: object): void {
  const listeners = ps.listeners.get(topic)
  if (listeners) {
    listeners.forEach(handler => {
      handler(topic, payload)
    })
  }
}

describe('pubsub', () => {
  test('simple case', () => {
    const ps = new Pubsub()
    const handler = jest.fn((_t, _p) => undefined)
    const unsub = ps.subscribe('one', handler)
    ps.publish('one', { name: 'zebra' })
    expect(handler.mock.calls.length).toBe(1)
    const [arg1, arg2] = handler.mock.calls[0]
    expect(arg1).toEqual('one')
    expect(arg2).toEqual({ name: 'zebra' })
  })
  test('unsub case', () => {
    const ps = new Pubsub()
    const handler = jest.fn((_t, _p) => undefined)
    const unsub = ps.subscribe('one', handler)
    unsub()
    ps.publish('one', { name: 'zebra' })
    expect(handler.mock.calls.length).toBe(0)
  })
  test('simple case', () => {
    const ps = new Pubsub()
    const handler = jest.fn((_t, _p) => undefined)
    ps.subscribe('one', handler)
    ps.publish('one', { name: 'zebra' })
    ps.publish('one', { name: 'taras' })
    ps.publish('one', { age: 'bulba' })
    ps.publish('one-no', { name: 'notcalled' })
    expect(handler.mock.calls.length).toBe(3)
    expect(handler.mock.calls[0]).toEqual(['one', { name: 'zebra' }])
    expect(handler.mock.calls[1]).toEqual(['one', { name: 'taras' }])
    expect(handler.mock.calls[2]).toEqual(['one', { age: 'bulba' }])
  })
})

describe('functional pubsub', () => {
  test('simple case', () => {
    const ps = makePubsub()
    const handler = jest.fn((_t, _p) => undefined)
    subscribePubsub(ps, 'one', handler)

    publishPubsub(ps, 'one', { name: 'zebra' })
    publishPubsub(ps, 'one', { name: 'taras' })
    publishPubsub(ps, 'one', { age: 'bulba' })

    expect(handler.mock.calls.length).toBe(3)
    expect(handler.mock.calls[0]).toEqual(['one', { name: 'zebra' }])
    expect(handler.mock.calls[1]).toEqual(['one', { name: 'taras' }])
    expect(handler.mock.calls[2]).toEqual(['one', { age: 'bulba' }])
  })
})
