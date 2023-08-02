import { Product } from "./product";

export interface Cart {
    total: number;
    items: Product[];
}