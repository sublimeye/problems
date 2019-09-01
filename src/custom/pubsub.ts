// subscription returns unsubscribe
// subscribe by topic and callback
// unsubscribe by topic - remove all subscriptions for that topic
// unsubscribe by "returned function" only removes the function

// optimize by putting subscriptions into buckets "topics"

type Subscription = {
  topic: string
  callback: Function
}

type Callback = Function
type CallbackMap = Map<number, Callback>

class Emitter {
  private counter = 0
  private events: Map<string, CallbackMap> = new Map()
  // unsubscribe by event name and function match

  subscribe(topic: string, callback: Function) {
    let events = this.events.get(topic)

    if (!events) {
      events = new Map()
      this.events.set(topic, events)
    }

    const index = this.counter++
    events.set(index, callback)

    return {
      release: () => {
        if (events) {
          events.delete(index)
        }
      }
    }
  }

  // unsubscribe() {}
  emit(topic: string, ...args: any) {
    const events = this.events.get(topic)

    if (!events) return
    events.forEach(callback => {
      Reflect.apply(callback, this, args)
    })
  }
}

const emitter = new Emitter()
const sub = emitter.subscribe('event_name', (x: any) => console.log('first', x))
const sub2 = emitter.subscribe('event_name', (...x: any) =>
  console.log('second', ...x),
)

emitter.emit('event_name', 'foo', 'bar')
emitter.emit('event_name', 'foo', 'bar', 'baz')
sub.release()
emitter.emit('event_name', 'foo', 'bar', 'baz')
sub2.release()
emitter.emit('event_name', 'again', 'again')

// sub.release()
