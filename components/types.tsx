export interface sidebarItems {
  src?: string;
  name: string;
  filter?: boolean;
}

export type Product = {
    id: number;
    name: string;
    genre: string;
    available: number;
    stock: boolean;
    discount: number;
    price: number;
    colors?: string[];
    size?: string[];
    img: string;
  }