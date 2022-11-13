/**
 * class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
// Only do this once so we don't loop forever
myEmitter.once('newListener', (event, listener) => {
  if (event === 'event') {
    // Insert a new listener in front
    myEmitter.on('event', () => {
      console.log('B');
    });
  }
});
myEmitter.on('event', () => {
  console.log('A');
});
myEmitter.emit('event');
// Prints:
//   B
//   A
 */

type EventEmitterT = {
  on(event: string, handler: () => void): void
  emit(event: string, ...args: any): void
}

class EventEmitter implements EventEmitterT {
  private index = 0
  private listeners: Map<string, Map<number, handler>> = new Map()
  private systemListeners: Map<string, Map<number, handler>> = new Map()
  private systemEvents = ['newListener', 'removeListener']

  emit(event: string, ...args: any) {
    const handlers = this.listeners.get(event)
    if (handlers) {
      handlers.forEach(handler => {
        Reflect.apply(handler, undefined, args)
      })
    }
  }

  on(event: string, handler: handler) {
    const index = ++this.index
    const listeners = this.listeners

    if (!listeners.has(event)) {
      listeners.set(event, new Map())
    }
    const handlers = listeners.get(event)

    if (handlers) {
      handlers.set(index, handler)
      this.emit('newListener', event, handler)
    }

    return () => {
      if (handlers) {
        this.emit('removeListener', event, handler, index)
        handlers.delete(index)
      }
    }
  }

  eventNames() {
    return Array.from(this.listeners.keys()).filter(x => x !== 'newListener')
  }
}

describe('event emitter API', () => {
  test('simple case', () => {
    const ps = new EventEmitter()
    const handler = jest.fn((_t, _p) => undefined)
    const handler2 = jest.fn((_t, _p) => undefined)
    const handler3 = jest.fn((_t, _p) => undefined)
    ps.on('newListener', handler3)
    expect(handler3.mock.calls.length).toBe(1)

    ps.on('one', handler)
    ps.on('two', handler2)

    ps.emit('one', { name: 'zebra' })
    ps.emit('two', { name: 'xza' })
    expect(handler.mock.calls.length).toBe(1)
    expect(handler2.mock.calls.length).toBe(1)

    expect(handler.mock.calls[0]).toEqual([{ name: 'zebra' }])
    expect(handler2.mock.calls[0]).toEqual([{ name: 'xza' }])
    expect(ps.eventNames()).toEqual(['one', 'two'])
  })
})
