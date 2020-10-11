export interface Taxon {
  id: number;
  type: string;
  name: string;
  products_count: number;
  icon: {
    mini_url: string;
    normal_url: string;
  };
  children?: Taxon[];
  alt_icon: null;
}
