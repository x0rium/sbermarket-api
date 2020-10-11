export interface Facet {
  key: string;
  name: string;
  type: string;
  options: {
    value: number;
    count: number;
    active: boolean;
    permalink?: string;
  }[];
}
