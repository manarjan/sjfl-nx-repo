const baseUrl = 'https://924f-20-219-147-128.ngrok-free.app';

export const API = {
  user: {
    register: `${baseUrl}/user/register`,
    profile: `${baseUrl}/user/profile`,
  },
  otp: {
    verify: `${baseUrl}/user/otp/verify`,
    send: `${baseUrl}/user/otp/send`,
  },
  counselling: {
    base: `${baseUrl}/user/counselling`,
    create: `${baseUrl}/user/counselling/schedule`,
    upcoming: `${baseUrl}/user/counselling/upcoming`,
    past: `${baseUrl}/user/counselling/past`,
  },
};