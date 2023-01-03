import dotenv from 'dotenv';
import { Pool } from "pg";

dotenv.config();

export const client = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT || "5432"),
});

client.connect();

client.on('error', (err) => {
  console.error('Unexpected error on idle client', err)
})