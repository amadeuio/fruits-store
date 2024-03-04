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

export type Vitamin =
  | "Vitamin C"
  | "Vitamin A"
  | "Vitamin K"
  | "Vitamin E"
  | "Vitamin B6"
  | "Vitamin B9"
  | "Vitamin B2"
  | "Vitamin B3"
  | "Vitamin B1"
  | "Vitamin B5";

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
  imageName: string;
  price: number;
  colors: Color[];
  family: Family;
  vitamins: Vitamin[];
  favorite: boolean;
  inBag: boolean;
}

export type Fruits = Fruit[];
