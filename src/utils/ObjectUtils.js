/**
 * Checks that an object has all the provided properties
 * @param {Array<string>} propertyNames Properties to check for
 * @returns {boolean}
 *
 * @example
 * objectMatches(['a', 'b'])({ a: 1, b: 2 })
 * // true
 *
 * objectMatches(['a', 'b'])({ a: 1 })
 * // false
 *
 * objectMatches(['a', 'b'])({ a: 1, b: 2, c: 3 })
 * // false
 */
export function objectMatches (propertyNames) {
  const propertyNamesSet = new Set(propertyNames)

  return (object) => {
    if (!object || typeof object !== 'object') { return false }

    const keys = Object.keys(object)
    return keys.length === propertyNamesSet.size &&
      keys.every((key) => propertyNamesSet.has(key))
  }
}

/**
 * Deeply merges an object on top of another with the minimum amount of cloning
 * @param source
 * @param addition
 *
 * @example
 * const source = { a: { b: 1, c: 2 }, z: {...} };
 * const addition = { a: { b: 3 }, e: 5 };
 * mergeImmutable(source, addition)
 * // { a: { b: 3, c: 2 }, e: 5, z: {...} }
 * // z is not mentioned in the addition and thus it has not been deep cloned
 */
export function mergeImmutable (source, addition) {
  // filtering out unmeargeable data
  if (
    typeof source !== 'object' ||
    source === null ||
    Array.isArray(source) || // merging arrays makes no sense
    typeof addition !== 'object' ||
    addition === null ||
    Array.isArray(addition)
  ) {
    return addition
  }

  const clone = Object.assign({}, source)

  Object.keys(addition).forEach((key) => {
    clone[key] = mergeImmutable(clone[key], addition[key])
  })

  return clone
}

/**
 * Updates the value of source.{chain} to a given value without deep cloning the
 * original source. The update is done in a non-destructive manner - the original source
 * is preserved.
 * @param {Object} source
 * @param {Array<string>} chain
 * @param {*} value
 *
 * @example
 * const source = { a: { b: 1, c: 2 }, z: {...} };
 * setImmutable(source, ['a', 'b'], 3)
 * // { a: { b: 3, c: 2 }, z: {...} }
 * // z is not part of the chain and thus it has not been deep cloned
 *
 * setImmutable(source, ['a', 'b', 'd', 'e'], 3)
 * // { a: { b: { d: { e: 3 } }, c: 2 }, z: {...} }
 * // if the chain is longer than the depth of source then new nodes/objects are created
 */
export function setImmutable (source, chain, value) {
  function createObject (index) {
    return index < chain.length
      ? { [chain[index]]: createObject(index + 1) }
      : value
  }

  function recurse (source, index) {
    if (typeof source !== 'object' || source === null) {
      return createObject(index)
    }

    if (index >= chain.length) {
      return value
    }

    const shallow = Array.isArray(source)
      ? source.slice()
      : Object.assign({}, source)

    const propertyName = chain[index]
    shallow[propertyName] = recurse(source[propertyName], index + 1)
    return shallow
  }

  if (!Array.isArray(chain)) {
    chain = [chain]
  }

  return recurse(source, 0)
}

// https://github.com/gaearon/react-pure-render/blob/master/src/shallowEqual.js
/**
 * Shallowly tests if two objects are equal.
 * Similar to _.isEqual but shallow and for objects only.
 * Minor quirk: properties are compared with `===` and thus NaN properties
 * are not equal to themselves and nor is +0 with -0.
 * @param {*} objA
 * @param {*} objB
 * @returns {boolean}
 */
export function shallowEqual (objA, objB) {
  if (objA === objB) {
    return true
  }

  if (
    typeof objA !== 'object' || objA === null ||
    typeof objB !== 'object' || objB === null
  ) {
    return false
  }

  const keysA = Object.keys(objA)
  const keysB = Object.keys(objB)

  if (keysA.length !== keysB.length) {
    return false
  }

  //! AT: why is having the property more important than it being on the
  // prototype chain? Is props some funky object with tons of properties
  // on the prototype chain?

  // Test for A's keys different from B.
  const bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB)
  for (let i = 0; i < keysA.length; i++) {
    if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
      return false
    }
  }

  return true
}

/**
 * Compares that two objects have the same keys from a given subset.
 * Minor quirk: properties are compared with `===` and thus NaN properties
 * are not equal to themselves and nor is +0 with -0.
 * @param {Object} objA
 * @param {Object} objB
 * @param {Array<string>} keys
 * @returns {boolean}
 */
export function shallowEqualOnly (objA, objB, keys) {
  if (objA === objB) {
    return true
  }

  if (
    typeof objA !== 'object' || objA === null ||
    typeof objB !== 'object' || objB === null
  ) {
    return false
  }

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]

    if (objA[key] !== objB[key]) {
      return false
    }
  }

  return true
}
