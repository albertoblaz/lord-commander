/**
 * Converts a string from CAPS_CASE to camelCase
 * @param {string} string
 * @returns {string}
 */
export function capsToCamel (string) {
  const camelCaps = string.replace(/_?([A-Z]+)/g, (match, group) =>
    `${group[0].toUpperCase()}${group.slice(1).toLowerCase()}`
  )

  return `${camelCaps[0].toLowerCase()}${camelCaps.slice(1)}`
}

/**
 * Converts a string from camelCase to CAPS_CASE
 * @param {string} string
 * @returns {string}
 */
export function camelToCaps (string) {
  const underscoreCamel = string.replace(/([a-z])([A-Z])/g, (match, end, begin) =>
    `${end}_${begin}`
  )

  return underscoreCamel.toUpperCase()
}

/**
 * Creates a safe URL by encoding the values with encodeURIComponent
 * @param strings
 * @param values
 * @returns {string}
 */
export function url (strings, ...values) {
  const init = values.reduce(
    (result, value, index) => `${result}${strings[index].trim()}${encodeURIComponent(value)}`,
    ''
  )

  return `${init}${strings[strings.length - 1].trim()}`
}
