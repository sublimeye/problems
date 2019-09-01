export class Queue<T> {
  private queue: T[]

  constructor() {
    this.queue = []
  }

  enqueue(value: T): void {
    this.queue.push(value)
  }

  dequeue(): T | undefined {
    return this.queue.shift()
  }

  isEmpty(): boolean {
    return this.queue.length === 0
  }
}

export default Queue
