// Finds the src of a fruit image with it's slug
function getImageSrc(slug: string): string {
  if (slug === "kiwi") {
    return "/images/kiwi-fruit.png";
  }

  if (slug === "pumpkin") {
    return "/images/jack-o-lantern.png";
  }

  const imageSrc = `/images/${slug}.png`;

  return imageSrc;
}

// Example:
// getImageSrc("Red Pepper")
// Output: '/images/red-pepper.png'

export default getImageSrc;
