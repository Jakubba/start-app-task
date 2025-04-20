import { ChangeEvent } from 'react';

export interface InputFieldProps {
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}
