import { v4 as uuidv4 } from "uuid";
import { Fruit, colorObject } from "./types";

export const fruits: Fruit[] = [
  {
    id: uuidv4(),
    name: "grapes",
    unicode: "1f347",
    colors: ["purple", "green"],
  },
  {
    id: uuidv4(),
    name: "melon",
    unicode: "1f348",
    colors: ["green", "brown"],
  },
  {
    id: uuidv4(),
    name: "watermelon",
    unicode: "1f349",
    colors: ["red", "green"],
  },
  {
    id: uuidv4(),
    name: "tangerine",
    unicode: "1f34a",
    colors: ["orange"],
  },
  {
    id: uuidv4(),
    name: "lemon",
    unicode: "1f34b",
    colors: ["yellow"],
  },
  {
    id: uuidv4(),
    name: "banana",
    unicode: "1f34c",
    colors: ["yellow"],
  },
  {
    id: uuidv4(),
    name: "pineapple",
    unicode: "1f34d",
    colors: ["yellow", "green"],
  },
  {
    id: uuidv4(),
    name: "mango",
    unicode: "1f96d",
    colors: ["yellow", "red", "green"],
  },
  {
    id: uuidv4(),
    name: "red-apple",
    unicode: "1f34e",
    colors: ["red"],
  },
  {
    id: uuidv4(),
    name: "green-apple",
    unicode: "1f34f",
    colors: ["green"],
  },
  {
    id: uuidv4(),
    name: "pear",
    unicode: "1f350",
    colors: ["green", "yellow"],
  },
  {
    id: uuidv4(),
    name: "peach",
    unicode: "1f351",
    colors: ["orange", "yellow"],
  },
  {
    id: uuidv4(),
    name: "cherries",
    unicode: "1f352",
    colors: ["red"],
  },
  {
    id: uuidv4(),
    name: "strawberry",
    unicode: "1f353",
    colors: ["red"],
  },
  {
    id: uuidv4(),
    name: "blueberries",
    unicode: "1fad0",
    colors: ["blue"],
  },
  {
    id: uuidv4(),
    name: "kiwi-fruit",
    unicode: "1f95d",
    colors: ["green", "brown"],
  },
  {
    id: uuidv4(),
    name: "tomato",
    unicode: "1f345",
    colors: ["red"],
  },
  {
    id: uuidv4(),
    name: "olive",
    unicode: "1fad2",
    colors: ["green", "black"],
  },
  {
    id: uuidv4(),
    name: "coconut",
    unicode: "1f965",
    colors: ["brown"],
  },
  {
    id: uuidv4(),
    name: "avocado",
    unicode: "1f951",
    colors: ["green"],
  },
  {
    id: uuidv4(),
    name: "eggplant",
    unicode: "1f346",
    colors: ["purple"],
  },
  {
    id: uuidv4(),
    name: "cucumber",
    unicode: "1f952",
    colors: ["green"],
  },
  {
    id: uuidv4(),
    name: "bell-pepper",
    unicode: "1fad1",
    colors: ["green", "red", "yellow"],
  },
  {
    id: uuidv4(),
    name: "hot-pepper",
    unicode: "1f336-fe0f",
    colors: ["red"],
  },
  {
    id: uuidv4(),
    name: "jack-o-lantern",
    unicode: "1f383",
    colors: ["orange"],
  },
];

export const colorList: colorObject[] = [
  { color: "purple", isChecked: true },
  { color: "green", isChecked: false },
  { color: "brown", isChecked: false },
  { color: "red", isChecked: false },
  { color: "orange", isChecked: false },
  { color: "yellow", isChecked: false },
  { color: "blue", isChecked: false },
  { color: "black", isChecked: false },
];
