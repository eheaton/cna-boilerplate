import { Environment } from '@root/constants';

export const ENV = (
  process.env.ENV || Environment.ALL
);