/**
 * Dispatches to different render functions based on the state of the component
 * stored in the local prop given by statePropertyName. Typical states of components
 * are 'loading', 'editing', 'loaded', 'readonly'.
 *
 * @param {string} statePropertyName
 * @param {Object<string, (string|Function)>} cases
 * @returns {ReactElement}
 */
export function switchOnState (statePropertyName, cases) {
  return function () {
    const state = this.props[statePropertyName]
    const match = cases[state]

    if (typeof match === 'function') {
      return Reflect.apply(match, this, [])
    } else if (typeof match === 'string') {
      return Reflect.apply(this[match], this, [])
    } else {
      console.error(`The switch-on-state handler for '${statePropertyName}' is neither a function or a string`)
    }
  }
}
