/**
 * Splits a comma-separated string into an array of trimmed strings
 * @param value - The comma-separated string to split
 * @returns Array of trimmed strings, or empty array if value is empty/undefined
 */
export function parseCommaSeparatedString(value: string | undefined): string[] {
	if (!value || value.trim() === "") {
		return [];
	}
	return value
		.split(",")
		.map((item) => item.trim())
		.filter((item) => item.length > 0);
}
