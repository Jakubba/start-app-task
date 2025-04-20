import { FormErrors } from './SignInForm.types';
export const validateEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.(com|pl|org|net|edu|gov)$/i;
  return re.test(email);
};

export const validatePassword = (password: string): boolean => password.length >= 6;

export const validateForm = (
  formData: { email: string; password: string; terms: boolean },
  setErrors: (errors: FormErrors) => void
): boolean => {
  const newErrors: FormErrors = {};

  if (!formData.email) {
    newErrors.email = 'Email is required.';
  } else if (!validateEmail(formData.email)) {
    newErrors.email = 'Enter a valid email address.';
  }

  if (!formData.password) {
    newErrors.password = 'Password is required.';
  } else if (!validatePassword(formData.password)) {
    newErrors.password = 'Password must be at least 6 characters long.';
  }

  if (!formData.terms) {
    newErrors.terms = 'You must agree to the Terms of Service.';
  }

  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;
};
