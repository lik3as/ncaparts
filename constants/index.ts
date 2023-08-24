import dotenv from 'dotenv';
import path from 'path';

const envPath = path.resolve(__dirname, "..", ".env");
dotenv.config({
  path: envPath
})

export const API_URL = (process.env.ENV == 'production') ? process.env.API_URL! : "http://localhost:8080/" ;