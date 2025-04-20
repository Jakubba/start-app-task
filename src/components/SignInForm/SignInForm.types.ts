export interface FormData {
  email: string;
  password: string;
  terms: boolean;
}

export interface FormErrors {
  email?: string;
  password?: string;
  terms?: string;
}
