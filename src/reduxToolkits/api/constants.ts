const SUPABASE_URL = process.env.SUPABASE_URL || "";
const SUPABASE_API_KEY = process.env.SUPABASE_API_KEY || "";
const AUTH_PATH = process.env.AUTH_PATH || "";
const LOGIN_AUTH_PASS_PATH = process.env.LOGIN_AUTH_PASS_PATH || "";
const USER_AUTH_PATH = process.env.USER_AUTH_PATH || "";
const API_PATH = process.env.API_PATH || "";
const BANK_API = process.env.BANK_API || "";
const CARD_API = process.env.CARD_API || "";
const DUE_MOVES_API = process.env.DUE_MOVES_API || "";
const MOVES_API = process.env.MOVES_API || "";

export {SUPABASE_API_KEY, SUPABASE_URL, LOGIN_AUTH_PASS_PATH, USER_AUTH_PATH, AUTH_PATH, API_PATH, BANK_API, CARD_API, DUE_MOVES_API, MOVES_API};
