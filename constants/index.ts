import dotenv from 'dotenv';
import path from 'path';

const envPath = path.resolve(__dirname, "..", ".env");
dotenv.config({
  path: envPath
})

export const SALES_LIST_LIMIT = 10;
export const API_URL = (process.env.NEXT_PUBLIC_ENV == 'production') ? process.env.NEXT_PUBLIC_API_URL! : "http://localhost:8080/" ;
export const logoHorizontalWhite = "/images/logos/logo-h-white.png";
export const logoVerticalWhite = "/images/logos/logo-white.png";
export const logoHorizontalBlack = "/images/logos/logo-h-black.png";
export const logoVerticalBlack = "/images/logos/logo-black.png";
export const emptyBox = "/images/mpt-box.png";