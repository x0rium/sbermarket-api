export interface Product {
  id: number;
  sku: string;
  retailer_sku: string;
  name: string;
  price: number;
  original_price: number;
  discount: number;
  human_volume: string;
  volume: number;
  volume_type: string;
  items_per_pack: number;
  discount_ends_at: string | null;
  images: {
    mini_url: string;
    small_url: string;
    product_url: string;
    preview_url: string;
    original_url: string;
  }[];
}
