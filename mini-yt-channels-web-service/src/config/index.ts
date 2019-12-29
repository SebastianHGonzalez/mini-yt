import dotenv from 'dotenv';

if (process.env.NODE_ENV !== 'production') dotenv.config();

export default function getConfig() {
  return {
    PORT: process.env.PORT || 3000,
  };
}
