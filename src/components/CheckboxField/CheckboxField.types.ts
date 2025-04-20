import { ChangeEvent } from 'react';

export interface CheckboxFieldProps {
  name: string;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}
