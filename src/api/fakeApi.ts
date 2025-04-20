interface SignInPayload {
  email: string;
  password: string;
}

export const signIn = ({
  email,
  password,
}: SignInPayload): Promise<{ message: string; token: string }> => {
  return new Promise((resolve, reject) => {
    const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

    (async () => {
      await delay(1500);

      if (!email.includes('@')) {
        return reject(new Error('Invalid email format.'));
      }

      if (email.endsWith('@blocked.com')) {
        return reject(new Error('This email domain is blocked.'));
      }

      if (email === 'delay@test.com') {
        await delay(3000);
      }

      if (email === 'error@test.com') {
        return reject(new Error('Unexpected server error.'));
      }

      return resolve({ message: 'Login successful', token: 'fake_token_123' });
    })();
  });
};

interface SignInPayload {
  email: string;
  password: string;
}
