import { Alert } from "alert";
import { NextDelivery } from "nextDelivery";
import { LineItem } from "lineItem";
import { Retailer } from "retailer";

export interface Shipment {
  id: number;
  number: string;
  cost: number;
  item_total: number;
  total: number;
  state: string;
  alerts: Alert[];
  promotions: unknown[];
  next_deliveries: NextDelivery[];
  driver_name: string;
  driver_phone: string;
  line_items: LineItem[];
  shipping_team_members: unknown[];
  delivery_window: unknown;
  retailer: Retailer;
  external_partners_service: unknown;
}
