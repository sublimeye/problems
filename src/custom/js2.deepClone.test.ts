function isObject(o: object) {
  return typeof o === 'object'
}

function deepClone(a, b) {
  for (let key in b) {
    a[key] =
      isObject(a[key]) && isObject(b[key]) ? deepClone(a[key], b[key]) : b[key]
  }
  return a
}

function deepCloneMultiple(...objects: object[]) {
  return objects.reduce(deepClone, {})
}

describe.only('cheap: deep clone', () => {
  test('should deep clone', () => {
    const a = { aa: 1, o: { cha: 50 }, z: 1 }
    const b = { bb: 1, z: { zz: 20 }, o: { bc: { bcc: 2 } } }
    const c = { cc: 50 }
    expect(deepClone(a, b)).toEqual({
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
  })
  test('should deep clone multiple arguments', () => {
    const a = { aa: 1, o: { cha: 50 }, z: 1 }
    const b = { bb: 1, z: { zz: 20 }, o: { bc: { bcc: 2 } } }
    const c = { cc: 50 }
    expect(deepCloneMultiple({}, a, b, c)).toEqual({
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
      cc: 50,
    })
  })
})
