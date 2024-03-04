function titleToHyphenated(inputString: string): string {
  return inputString.toLowerCase().replace(/\s+/g, "-");
}

// Finds the src of a fruit image with it's Title Case name
function getImageSrc(name: string): string {
  if (name === "Kiwi") {
    return "/images/kiwi-fruit.png";
  }

  if (name === "Pumpkin") {
    return "/images/jack-o-lantern.png";
  }

  const hypenatedName = titleToHyphenated(name);
  const imageSrc = `/images/${hypenatedName}.png`;

  return imageSrc;
}

// Example:
// getImageSrc("Red Pepper")
// Output: '/images/red-pepper.png'

export default getImageSrc;
