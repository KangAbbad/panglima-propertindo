/**
 * Parses a string value from search parameters into a number
 * @param value - The string value to parse from search parameters
 * @param defaultValue - Optional default number value to return if input is null/empty
 * @returns The parsed number, default value, or undefined if parsing fails
 */
export const parseStringToNumber = (value: string | null, defaultValue?: number): number | undefined => {
  if (!value && defaultValue !== undefined) return defaultValue
  if (!value) return undefined

  const parsed = parseInt(value, 10)
  if (isNaN(parsed)) return undefined

  return parsed
}
