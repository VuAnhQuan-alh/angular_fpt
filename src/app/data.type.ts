export interface TypeProducts {
  id: number;
  title: string;
  image: string;
  price: number | null;
  category: string;
  description: string;
}

export interface TypeCategories {
  id: number;
  name: string;
}