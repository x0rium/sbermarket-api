import { Product } from "product";
import { Property } from "property";

export interface CurrentProduct extends Product {
  properties: Property[];
  related_products: Product[];
}
