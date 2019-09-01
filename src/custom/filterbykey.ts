const items = [
  { color: 'red', type: 'tv', age: 18 },
  { color: 'silver', type: 'phone', age: 20 },
]

const excludes = [{ k: 'color', v: 'silver' }, { k: 'type', v: 'tv' }]

const ex = excludes.reduce((result, { k, v }) => ({ ...result, [k]: v }), {})

const filtered = items.filter(
  (object: any) => !excludes.some(({ k, v }) => object[k] === v),
)

console.log(filtered)

// filterByKeyValue

//
// function excludeItems(items, excludes) {
//   excludes.forEach(pair => {
//     items = items.filter(item => item[pair.k] === item[pair.v]);
//   });
//   return items;
// }
//
