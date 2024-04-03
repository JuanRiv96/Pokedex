import { config } from 'dotenv';
config();

export const PORT = process.env.PORT || 3001;
export const DB_USER = process.env.DB_USER || 'postgres';
export const DB_HOST = process.env.DB_HOST || 'localhost';
export const DB_PASSWORD = process.env.DB_PASSWORD || '1996';
export const DB_NAME = process.env.DB_NAME || 'pokedex';
export const DB_PORT = Number(process.env.DB_PORT) || 5432;