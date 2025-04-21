import { SignInPayload } from './fakeApi.types';
import { runValidations } from './fakieApi.validators';

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const signIn = async ({
  email,
  password,
}: SignInPayload): Promise<{ message: string; token: string }> => {
  await delay(1500);

  runValidations({ email, password });

  if (email === 'delay@test.com') {
    await delay(3000);
  }

  if (email === 'error@test.com') {
    throw new Error('Unexpected server error.');
  }

  return { message: 'Login successful', token: 'fake_token_123' };
};
