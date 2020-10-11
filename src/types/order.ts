import { Address } from "address";
import { Shipment } from "shipment";

export interface Order {
  number: string;
  total: number;
  item_count: number;
  item_total: number;
  ship_total: number;
  adjustment_total: number;
  promo_total: number;
  shipment_state?: unknown;
  payment_state?: unknown;
  special_instructions?: unknown;
  created_at: string;
  updated_at: string;
  completed_at: string | null;
  email: string;
  uuid: string;
  address: Address;
  payment: unknown;
  replacement_policy: unknown;
  shipments: Shipment[];
  promotion_codes: unknown[];
}
