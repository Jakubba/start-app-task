export interface Plan {
  title: string;
  price: number;
  description: string;
  features: {
    text: string;
    active: boolean;
  }[];
}
