export type UUID = string;

export type Color = "purple" | "green" | "brown" | "red" | "orange" | "yellow" | "blue" | "black";

export interface Fruit {
  id: UUID;
  name: string;
  unicode: string;
  colors: Color[];
}

export interface colorObject {
  color: Color;
  isChecked: boolean;
}
