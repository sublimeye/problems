import Graph from './graph'
import BFS from './bfs'

type Vertex = { name: string }

const verticies: Vertex[] = [
  { name: 'Roman' },
  { name: 'NFS' },
  { name: 'Sasha' },
  { name: 'Vlad' },
  { name: 'Mortal Kombat' },
  { name: 'Ros' },
  { name: 'Theater Gambler' },
  { name: 'Bogdan' },
  { name: 'Dimka' },
]

const gg = new Graph(verticies)
gg.addEdge(0, 1)
gg.addEdge(1, 2)
gg.addEdge(1, 3)
gg.addEdge(2, 6)
gg.addEdge(3, 4)
gg.addEdge(4, 5)
gg.addEdge(5, 6)
gg.addEdge(6, 7)
gg.addEdge(1, 8)
gg.addEdge(4, 8)

const bfs = new BFS(gg, 0)
// bfs.showStats()
const path = bfs.pathTo(5)

const pp = path.reduce((result, p, idx) => {
  if (idx === 0) return `${verticies[p].name}`
  return `${result} –> ${verticies[p].name}`
}, '')
console.log(pp)
