interface IGraph {
  addEdge(v: number, w: number): void
  adj(v: number): Iterable<number>
  V(): number
  E(): number
}



export class Graph implements IGraph {
  private readonly adjucent: number[][]
  private readonly v: number

  constructor(v: ({ name: string })[]) {
    this.v = v.length
    this.adjucent = []
  }

  addEdge(v: number, w: number): void {
    if (!this.adjucent[v]) this.adjucent[v] = []
    if (!this.adjucent[w]) this.adjucent[w] = []

    this.adjucent[v].push(w)
    this.adjucent[w].push(v)
  }

  adj(v: number): Iterable<number> {
    return this.adjucent[v]
  }

  V(): number {
    return this.v
  }

  E(): number {
    return 0
  }
}

export default Graph
