import { Filters } from "../data/types";

// Returns an array containg the names of all checked filters
function getCheckedFilters(filters: Filters) {
  const { colors, families, vitamins } = filters;

  const checkedColors = colors.filter((color) => color.isChecked);
  const checkedFamilies = families.filter((family) => family.isChecked);
  const checkedVitamins = vitamins.filter((vitamin) => vitamin.isChecked);

  const checkedFilters = [...checkedColors, ...checkedFamilies, ...checkedVitamins];

  return checkedFilters;
}

export default getCheckedFilters;
