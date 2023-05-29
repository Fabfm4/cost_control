/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  env: {
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_API_KEY: process.env.SUPABASE_API_KEY,
    AUTH_PATH: process.env.AUTH_PATH,
    API_PATH: process.env.API_PATH,
    BANK_API: process.env.BANK_API,
    DUE_MOVES_API: process.env.DUE_MOVES_API,
    MOVES_API: process.env.MOVES_API,
    CARD_API: process.env.CARD_API,
    USER_AUTH_PATH: process.env.USER_AUTH_PATH,
    LOGIN_AUTH_PASS_PATH: process.env.LOGIN_AUTH_PASS_PATH,
  }
}

module.exports = nextConfig
