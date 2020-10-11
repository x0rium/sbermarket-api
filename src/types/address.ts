export interface Address {
  id: number;
  first_name: string | null;
  last_name: string | null;
  full_address: string;
  city: string;
  street: string;
  building: string;
  block: string;
  entrance: string;
  floor: string;
  apartment: string;
  comments: string;
  lat: number;
  lon: number;
  kind: unknown;
  door_phone: string;
  delivery_to_door: boolean;
}
