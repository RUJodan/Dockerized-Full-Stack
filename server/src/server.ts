import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// routing imports
import { login } from './routes/login';
import { test } from './routes/test';

dotenv.config();

const PORT = process.env.PORT || 3001;
const app = express();

// set cors and body parsing
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// apply routes to express app
app.use('/api/login', login);
app.use('/api/test', test);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
