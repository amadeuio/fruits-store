// Transforms a Title Case string to kebab-case, used for fruit image names and urls
function toKebabCase(inputString: string): string {
  return inputString.toLowerCase().replace(/\s+/g, "-");
}

export default toKebabCase;
