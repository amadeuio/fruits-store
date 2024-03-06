import { v4 as uuidv4 } from "uuid";
import { Fruits } from "./types";

export const initialFruits: Fruits = [
  {
    id: uuidv4(),
    name: "Tangerine",
    price: 1.99,
    colors: ["Orange"],
    family: "Citrus",
    vitamins: ["Vitamin C"],
    isFavorite: false,
    inBag: false,
  },
  {
    id: uuidv4(),
    name: "Melon",
    price: 3.49,
    colors: ["Green"],
    family: "Gourd",
    vitamins: ["Vitamin A", "Vitamin C"],
    isFavorite: false,
    inBag: true,
  },
  {
    id: uuidv4(),
    name: "Watermelon",
    price: 5.99,
    colors: ["Red", "Green"],
    family: "Gourd",
    vitamins: ["Vitamin A", "Vitamin C"],
    isFavorite: false,
    inBag: false,
  },
  {
    id: uuidv4(),
    name: "Lemon",
    price: 1.49,
    colors: ["Yellow"],
    family: "Citrus",
    vitamins: ["Vitamin C"],
    isFavorite: false,
    inBag: false,
  },
  {
    id: uuidv4(),
    name: "Banana",
    price: 0.79,
    colors: ["Yellow"],
    family: "Other",
    vitamins: ["Vitamin B6"],
    isFavorite: false,
    inBag: false,
  },
  {
    id: uuidv4(),
    name: "Pineapple",
    price: 2.99,
    colors: ["Yellow", "Green"],
    family: "Other",
    vitamins: ["Vitamin C", "Vitamin B6"],
    isFavorite: false,
    inBag: false,
  },
  {
    id: uuidv4(),
    name: "Mango",
    price: 4.99,
    colors: ["Yellow", "Red", "Green"],
    family: "Cashew",
    vitamins: ["Vitamin A", "Vitamin C"],
    isFavorite: false,
    inBag: false,
  },
  {
    id: uuidv4(),
    name: "Red Apple",
    price: 1.29,
    colors: ["Red"],
    family: "Rose",
    vitamins: ["Vitamin C"],
    isFavorite: false,
    inBag: false,
  },
  {
    id: uuidv4(),
    name: "Green Apple",
    price: 1.29,
    colors: ["Green"],
    family: "Rose",
    vitamins: ["Vitamin C"],
    isFavorite: false,
    inBag: false,
  },
  {
    id: uuidv4(),
    name: "Pear",
    price: 2.49,
    colors: ["Green"],
    family: "Rose",
    vitamins: ["Vitamin C", "Vitamin K"],
    isFavorite: false,
    inBag: false,
  },
  {
    id: uuidv4(),
    name: "Peach",
    price: 2.99,
    colors: ["Orange"],
    family: "Rose",
    vitamins: ["Vitamin A", "Vitamin C"],
    isFavorite: false,
    inBag: false,
  },

  {
    id: uuidv4(),
    name: "Cherries",
    price: 3.99,
    colors: ["Red"],
    family: "Rose",
    vitamins: ["Vitamin C"],
    isFavorite: false,
    inBag: false,
  },
  {
    id: uuidv4(),
    name: "Strawberry",
    price: 2.79,
    colors: ["Red"],
    family: "Rose",
    vitamins: ["Vitamin C"],
    isFavorite: false,
    inBag: false,
  },
  {
    id: uuidv4(),
    name: "Blueberries",
    price: 4.49,
    colors: ["Blue", "Black"],
    family: "Berry",
    vitamins: ["Vitamin C", "Vitamin K"],
    isFavorite: false,
    inBag: false,
  },
  {
    id: uuidv4(),
    name: "Grapes",
    price: 3,
    colors: ["Purple"],
    family: "Berry",
    vitamins: ["Vitamin C", "Vitamin K"],
    isFavorite: true,
    inBag: false,
  },
  {
    id: uuidv4(),
    name: "Kiwi",
    price: 1.99,
    colors: ["Green", "Brown"],
    family: "Other",
    vitamins: ["Vitamin C", "Vitamin K"],
    isFavorite: false,
    inBag: false,
  },
  {
    id: uuidv4(),
    name: "Tomato",
    price: 1.49,
    colors: ["Red"],
    family: "Nightshade",
    vitamins: ["Vitamin A", "Vitamin C"],
    isFavorite: false,
    inBag: false,
  },
  {
    id: uuidv4(),
    name: "Olive",
    price: 3.99,
    colors: ["Green"],
    family: "Other",
    vitamins: ["Vitamin E", "Vitamin K"],
    isFavorite: false,
    inBag: false,
  },
  {
    id: uuidv4(),
    name: "Coconut",
    price: 2.79,
    colors: ["Brown"],
    family: "Palm",
    vitamins: ["Vitamin B6"],
    isFavorite: false,
    inBag: false,
  },
  {
    id: uuidv4(),
    name: "Avocado",
    price: 2.99,
    colors: ["Green", "Brown"],
    family: "Laurel",
    vitamins: ["Vitamin K", "Vitamin E"],
    isFavorite: false,
    inBag: false,
  },
  {
    id: uuidv4(),
    name: "Eggplant",
    price: 1.79,
    colors: ["Purple"],
    family: "Nightshade",
    vitamins: ["Vitamin K"],
    isFavorite: false,
    inBag: false,
  },
  {
    id: uuidv4(),
    name: "Cucumber",
    price: 0.99,
    colors: ["Green"],
    family: "Gourd",
    vitamins: ["Vitamin K"],
    isFavorite: false,
    inBag: false,
  },
  {
    id: uuidv4(),
    name: "Bell Pepper",
    price: 1.29,
    colors: ["Green"],
    family: "Nightshade",
    vitamins: ["Vitamin A", "Vitamin C"],
    isFavorite: false,
    inBag: false,
  },
  {
    id: uuidv4(),
    name: "Hot Pepper",
    price: 2.49,
    colors: ["Red"],
    family: "Nightshade",
    vitamins: ["Vitamin C"],
    isFavorite: false,
    inBag: false,
  },
  {
    id: uuidv4(),
    name: "Pumpkin",
    price: 2.49,
    colors: ["Orange"],
    family: "Gourd",
    vitamins: ["Vitamin A"],
    isFavorite: false,
    inBag: false,
  },
];
