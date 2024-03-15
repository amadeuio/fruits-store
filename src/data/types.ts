export type UUID = string;

export type Color = "Purple" | "Green" | "Brown" | "Red" | "Orange" | "Yellow" | "Blue" | "Black";

export type Family =
  | "Rose"
  | "Citrus"
  | "Nightshade"
  | "Gourd"
  | "Palm"
  | "Cashew"
  | "Berry"
  | "Laurel"
  | "Other";

export type Vitamin = "Vitamin C" | "Vitamin A" | "Vitamin K" | "Vitamin E" | "Vitamin B6";

export interface ColorObject {
  name: Color;
  isChecked: boolean;
}

export interface FamilyObject {
  name: Family;
  isChecked: boolean;
}

export interface VitaminObject {
  name: Vitamin;
  isChecked: boolean;
}

export interface Fruit {
  id: UUID;
  name: string;
  slug: string;
  price: number;
  quantity: number;
  colors: Color[];
  family: Family;
  vitamins: Vitamin[];
  isFavorite: boolean;
  inBag: boolean;
}

export type Fruits = Fruit[];

export interface Filters {
  colors: ColorObject[];
  families: FamilyObject[];
  vitamins: VitaminObject[];
  favorite: boolean;
  query: string;
}

export type FruitDescriptions = {
  [key: string]: string;
};
