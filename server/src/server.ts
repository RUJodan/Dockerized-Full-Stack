import express from 'express';
import cors from 'cors';

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api', (_req, res) => {
  res.json({ message: 'Hello from server!!!' });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
