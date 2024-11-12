import * as dotenv from 'dotenv';

dotenv.config({path: './src/.env'})

const DB_KEY = process.env.DB_KEY;
const DATABASE_URL = process.env.DATABASE_URL;

export default { DB_KEY, DATABASE_URL };