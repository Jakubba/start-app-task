import { SignInPayload } from './fakeApi.types';

export const validateEmail = ({ email }: SignInPayload) => {
  if (!email.includes('@')) {
    throw new Error('Invalid email format.');
  }
};

export const validatePassword = ({ password }: SignInPayload) => {
  if (password.length < 6) {
    throw new Error('Password must be at least 6 characters.');
  }
};

export const validateBlockedDomain = ({ email }: SignInPayload) => {
  if (email.endsWith('@blocked.com')) {
    throw new Error('This email domain is blocked.');
  }
};

export const runValidations = (payload: SignInPayload) => {
  validateEmail(payload);
  validatePassword(payload);
  validateBlockedDomain(payload);
};
