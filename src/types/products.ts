import { Product } from "product";
import { Meta } from "meta";
import { Facet } from "facet";
import { Sort } from "sort";

export interface Products {
  products: Product[];
  meta: Meta;
  facets: Facet[];
  sort: Sort[];
}
