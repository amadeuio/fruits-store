import { Filters, Fruits } from "../data/types";

// Returns an array of fruits that match the filters
function filterFruits(fruits: Fruits, filters: Filters) {
  const { colors, families, vitamins, favorite, query } = filters;

  const filteredFruits = fruits.filter((fruit) => {
    // Check if the fruit is favorite
    if (favorite && !fruit.isFavorite) return false;

    // Check if the fruit name matches the query
    if (query && !fruit.name.toLowerCase().includes(filters.query.toLowerCase())) {
      return false;
    }

    // Check if the fruit matches colors, family and vitamins
    const checkedColors = colors.filter((color) => color.isChecked).map((color) => color.name);
    const checkedFamilies = families
      .filter((family) => family.isChecked)
      .map((family) => family.name);
    const checkedVitamins = vitamins
      .filter((vitamin) => vitamin.isChecked)
      .map((vitamin) => vitamin.name);

    // Triggers if ANY checkbox is checked
    if (checkedColors.length || checkedFamilies.length || checkedVitamins.length) {
      const colorMatch = checkedColors.every((checkedColor) => fruit.colors.includes(checkedColor));
      const familyMatch = checkedFamilies.every((checkedFamily) =>
        fruit.family.includes(checkedFamily)
      );
      const vitaminMatch = checkedVitamins.every((checkedVitamin) =>
        fruit.vitamins.includes(checkedVitamin)
      );

      return colorMatch && familyMatch && vitaminMatch; // True only if ALL checked checkboxes match the fruit
    }

    return true;
  });

  return filteredFruits;
}

export default filterFruits;
