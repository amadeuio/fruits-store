import { Filters } from "./types";

export const initialFilters: Filters = {
  colors: [
    { name: "Purple", isChecked: false },
    { name: "Green", isChecked: false },
    { name: "Brown", isChecked: false },
    { name: "Red", isChecked: false },
    { name: "Orange", isChecked: false },
    { name: "Yellow", isChecked: false },
    { name: "Blue", isChecked: false },
    { name: "Black", isChecked: false },
  ],
  families: [
    { name: "Rose", isChecked: false },
    { name: "Citrus", isChecked: false },
    { name: "Nightshade", isChecked: false },
    { name: "Gourd", isChecked: false },
    { name: "Palm", isChecked: false },
    { name: "Cashew", isChecked: false },
    { name: "Berry", isChecked: false },
    { name: "Laurel", isChecked: false },
    { name: "Other", isChecked: false },
  ],
  vitamins: [
    { name: "Vitamin C", isChecked: false },
    { name: "Vitamin A", isChecked: false },
    { name: "Vitamin K", isChecked: false },
    { name: "Vitamin E", isChecked: false },
    { name: "Vitamin B6", isChecked: false },
  ],
  favorite: false,
  query: "",
};
