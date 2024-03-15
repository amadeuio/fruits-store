import { Filters, Fruits } from "../data/types";

// Returns true if the fruit matches the query, otherwise false
function matchesQuery(fruit, query) {
  const getCleanStr = (str) => {
    return str.replace(/\s+/g, "").toLowerCase();
  };

  const getCleanQuery = (str) => {
    return getCleanStr(str).replace(/[^\w\s]/gi, "");
  };

  const cleanQuery = getCleanQuery(query);

  // If there's a query, perform checks
  if (cleanQuery) {
    const matchString = (str) => getCleanStr(str).includes(cleanQuery);

    const matchVitamins = (arr) => arr.some((vitamin) => matchString(vitamin));
    const matchColors = (arr) => arr.some((color) => matchString(color + "color"));

    const anyMatch =
      matchString(fruit.name + "fruit") ||
      matchString(fruit.family + "family") ||
      matchVitamins(fruit.vitamins) ||
      matchColors(fruit.colors);

    return anyMatch;
  }

  // If there's no query it's always a match
  return true;
}

// Returns true if the fruit matches all checked checkboxes, otherwise false
function matchesCheckboxes(fruit, colors, families, vitamins) {
  const checkedColors = colors.filter((color) => color.isChecked).map((color) => color.name);
  const checkedFamilies = families
    .filter((family) => family.isChecked)
    .map((family) => family.name);
  const checkedVitamins = vitamins
    .filter((vitamin) => vitamin.isChecked)
    .map((vitamin) => vitamin.name);

  // If any checkboxes are checked, perform checks
  if (checkedColors.length || checkedFamilies.length || checkedVitamins.length) {
    const colorMatch = checkedColors.every((checkedColor) => fruit.colors.includes(checkedColor));
    const familyMatch = checkedFamilies.every((checkedFamily) =>
      fruit.family.includes(checkedFamily)
    );
    const vitaminMatch = checkedVitamins.every((checkedVitamin) =>
      fruit.vitamins.includes(checkedVitamin)
    );

    return colorMatch && familyMatch && vitaminMatch;
  }

  // If there's no checked boxes it's always a match
  return true;
}

// Returns true always, except if the favorite filter is is true and fruit.isFavorite is false
function matchesFavorite(fruit, favorite) {
  if (favorite && !fruit.isFavorite) {
    return false;
  }

  return true;
}

// Returns an array of fruits that match the filters
function filterFruits(fruits: Fruits, filters: Filters) {
  const { colors, families, vitamins, favorite, query } = filters;

  const filteredFruits = fruits.filter((fruit) => {
    const favoriteMatch = matchesFavorite(fruit, favorite);
    const queryMatch = matchesQuery(fruit, query);
    const checkboxesMatch = matchesCheckboxes(fruit, colors, families, vitamins);

    return favoriteMatch && queryMatch && checkboxesMatch;
  });

  return filteredFruits;
}

export default filterFruits;
