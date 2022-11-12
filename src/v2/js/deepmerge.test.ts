const isObject = (maybeObject: any): maybeObject is Object => {
  return (
    maybeObject &&
    typeof maybeObject === 'object' &&
    !Array.isArray(maybeObject)
  )
}

const deepmerge = (left: any, right: any) => {
  if (isObject(left) && isObject(right)) {
    return Object.entries(right).reduce(
      (merged, [key, val]) => {
        if (!(key in left)) {
          merged[key] = val
        } else {
          merged[key] = deepmerge(left[key], val)
        }

        return merged
      },
      { ...left },
    )
  } else {
    return right
  }
}

const deepmerge2 = (left: any, right: any) => {
  if (!isObject(left) || !isObject(right)) return right

  return Object.keys(right).reduce(
    (merged, k) => ({ ...merged, [k]: deepmerge2(left[k], right[k]) }),
    { ...left },
  )
}

const deepmerge3 = (left, right) => {
  if (!isObject(left) || !isObject(right)) return right
  const copy = { ...left }
  for (const key in right) {
    copy[key] = deepmerge3(left[key], right[key])
  }
  return copy
}

const deepmerge4 = (left, right) => {
  if (Array.isArray(left) && Array.isArray(right)) return [...left, ...right]
  if (!isObject(left) || !isObject(right)) return right
  const copy = { ...left }
  for (const key in right) {
    copy[key] = deepmerge4(left[key], right[key])
  }
  return copy
}

describe.only('deepmerge', () => {
  const series = fn => () => {
    expect(fn({ a: 10 }, { b: 10 })).toEqual({ a: 10, b: 10 })
    expect(fn({ a: 10 }, { a: 15 })).toEqual({ a: 15 })
    expect(fn({ a: { b: { c: 'x' } } }, { a: { b: { d: 'y' } } })).toEqual({
      a: { b: { c: 'x', d: 'y' } },
    })
    expect(fn(10, 20)).toEqual(20)
    const a = { aa: 1, o: { cha: 50 }, z: 1 }
    const b = { bb: 1, z: { zz: 20 }, o: { bc: { bcc: 2 } } }
    expect(fn(a, b)).toEqual({
      aa: 1,
      o: {
        cha: 50,
        bc: {
          bcc: 2,
        },
      },
      bb: 1,
      z: {
        zz: 20,
      },
    })

    const target = { a: 1 }
    const source = { b: { c: 2 } }
    const targetCopy = JSON.parse(JSON.stringify(target))
    const sourceCopy = JSON.parse(JSON.stringify(source))
    const merged = fn(target, source)
    expect(merged).toEqual({ a: 1, b: { c: 2 } })
    expect(target).toEqual(targetCopy)
    expect(source).toEqual(sourceCopy)
  }
  ;[deepmerge, deepmerge2, deepmerge3, deepmerge4].forEach(fn => {
    test(`Deepmerge test for ${fn.name}`, series(fn))
  })

  test('concating array', () => {
    expect(deepmerge4({ a: 1, b: [1, 2, 3] }, { b: [5, 6] })).toEqual({
      a: 1,
      b: [1, 2, 3, 5, 6],
    })
  })
})
