// 5:30

class LinkedListElement<T = any> {
  value: T | null
  next: LinkedListElement<T> | null

  constructor(value: T, next: LinkedListElement<T> | null = null) {
    this.value = value
    this.next = next
  }

  delete(): void {
    this.value = null
    this.next = null
  }
}

interface ILinkedList<T> {
  insert: (data: T) => LinkedListElement<T>
  insertAfter: (element: LinkedListElement<T>, data: T) => void
  delete: (element: LinkedListElement<T>) => void
}

class LinkedList<T = any> implements ILinkedList<T> {
  private head: LinkedListElement<T> | null = null

  // Insert a new element as the new head to the list
  insert(data: T): LinkedListElement<T> {
    const ne = new LinkedListElement<T>(data, this.head)
    this.head = ne
    return this.head
  }

  insertAfter(
    element: LinkedListElement<T> | null,
    data: T,
  ): LinkedListElement<T> | null {
    let curr = this.head

    if (!curr || !element) return null

    while (curr !== null) {
      if (curr === element) {
        const ne = new LinkedListElement(data, curr.next)
        curr.next = ne
        return ne
      }
      curr = curr.next
    }

    return null
  }

  iterate(callback: (element: LinkedListElement<T>) => void): void {
    console.info('iterating')
    let curr = this.head

    if (!curr) return

    while (curr !== null) {
      callback(curr)
      curr = curr.next
    }
  }

  delete(element: LinkedListElement<T>): void {
    let curr = this.head
    const prev = this.head

    if (curr === null || element === null || prev === null) {
      return
    }

    while (curr !== null) {
      if (curr === element) {
        // this is the head
        if (curr === prev) {
          this.head = null
        }

        // even if it's a head or tail it should be ok.. right?
        prev.next = curr.next
        curr.delete()
        break
      }

      curr = curr.next
    }
  }

  findMToLast(m: number): LinkedListElement<T> | null {
    let current = null
    let mbehind = null

    if (this.head === null) return null

    current = this.head

    // find if list has enough (m) elements
    for (let i = 0; i < m; i++) {
      const currentNext: LinkedListElement<T> | null = current.next
      if (currentNext === null) {
        return null
      }

      current = currentNext
    }

    mbehind = this.head

    // ts compiler can't figure out that mbhind can't be null
    while (current.next !== null && mbehind.next !== null) {
      current = current.next
      mbehind = mbehind.next
    }

    return mbehind
  }
}

const list = new LinkedList<string>()
list.insert('Roman')
const b = list.insert('Bogdan')
const s = list.insert('Sasha')

list.iterate(element => {
  console.log('value is:', element.value)
})

list.delete(b)
list.iterate(element => {
  console.log('value is:', element.value)
})

const v = list.insertAfter(s, 'Vasya')

list.iterate(element => {
  console.log('value is:', element.value)
})

list.insertAfter(v, 'Petya')
list.insert('Aleg')

list.iterate(element => {
  console.log('value is:', element.value)
})

const mt1 = list.findMToLast(2)

if (mt1) {
  console.log(mt1.value === 'Vasya')
}
