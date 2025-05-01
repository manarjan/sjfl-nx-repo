export const ADMIN_API = {
  auth: {
    login: '/login',
  },
};

const BASE_CLIENT_URL =
  'https://sjflappdev-fmbahreqhjb9erh5.centralindia-01.azurewebsites.net/user';

export const CLIENT_API = {
  user: {
    register: `${BASE_CLIENT_URL}/register`,
    profile: `${BASE_CLIENT_URL}/profile`,
  },
  otp: {
    verify: `${BASE_CLIENT_URL}/otp/verify`,
    send: `${BASE_CLIENT_URL}/otp/send`,
  },
  counselling: {
    base: `${BASE_CLIENT_URL}/counselling`,
    search: `${BASE_CLIENT_URL}/counselling/search`,
    create: `${BASE_CLIENT_URL}/counselling/schedule`,
  },
};
