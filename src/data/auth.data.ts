export const demoCredentials = {
  username: process.env.ORANGEHRM_USERNAME ?? 'Admin',
  password: process.env.ORANGEHRM_PASSWORD ?? 'admin123',
} as const;

export const invalidCredentials = {
  username: 'invalid-user',
  password: 'invalid-password',
} as const;
