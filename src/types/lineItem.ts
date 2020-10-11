import { Product } from "product";

export interface LineItem {
  id: number;
  quantity: number;
  packs: number;
  price: number;
  total: number;
  discount: number;
  customer_comment: string | null;
  product_in_stock: boolean | null;
  product: Product;
}
