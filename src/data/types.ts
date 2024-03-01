export type UUID = string;

export interface Fruit {
  id: UUID;
  name: string;
  imageKey: string;
  tags: string[];
}
