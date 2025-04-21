export interface Plan {
  title: string;
  price: number;
  description: string;
  user: string;
  time: string;
  features: {
    text: string;
    active: boolean;
  }[];
  btnText: string;
}
