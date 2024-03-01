// Transforms kebab-case emoji names to Title Case
export default function prettyName(str: string): string {
  if (str === "jack-o-lantern") {
    return "Pumpkin"; // More descriptive name for Pumpkin emoji
  }

  const words = str.split("-");
  const capitalizedWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
  const result = capitalizedWords.join(" ");

  return result;
}
