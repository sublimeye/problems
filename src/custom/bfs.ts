import Graph from './graph'
import QueueTest from './queue'

export class BreadthFirstPaths {
  private marked: boolean[] = []
  private edgeTo: number[] = []
  private distTo: number[] = []

  constructor(G: Graph, s: number) {
    this.bfs(G, s)
  }

  showStats(): void {
    console.log(`marked`, this.marked)
    console.log(`this.edgeTo`, this.edgeTo)
    console.log(`distance to`, this.distTo)
  }

  pathTo(x: number): number[] {
    let next = this.edgeTo[x]
    const path = [x]
    while (next !== undefined) {
      path.push(next)
      next = this.edgeTo[next]
    }

    return path
  }

  private bfs(G: Graph, s: number) {
    const q = new QueueTest<number>()
    let dist = 0
    q.enqueue(s)

    this.marked[s] = true
    this.distTo[s] = dist

    while(!q.isEmpty()) {
      const v = q.dequeue()

      if (v !== undefined) {
        for (let w of G.adj(v)) {
          if (!this.marked[w]) {
            q.enqueue(w)
            this.distTo[w] = this.distTo[v] + 1
            this.marked[w] = true
            this.edgeTo[w] = v
          }
        }
      }
    }
  }

}

export default BreadthFirstPaths
