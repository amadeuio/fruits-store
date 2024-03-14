// Transforms a kebab-case string to Title Case
function toTitleCase(inputString: string): string {
  const words = inputString.split("-");
  const titleCaseWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
  return titleCaseWords.join(" ");
}

export default toTitleCase;
