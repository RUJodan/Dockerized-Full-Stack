import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// routing imports
import { login } from './routes/login';
import { publicRoute } from './routes/public';
import { protectedRoute } from './routes/protected';
import { verify } from './utils/verify';

dotenv.config();

const PORT = process.env.PORT || 3001;
const app = express();

// set cors and body parsing
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// varification middlewar
async function verifyBearerToken(req: express.Request, res: express.Response, next: express.NextFunction) {
  const bearerHeader = req.headers.authorization;
  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];

    let identity: Record<string, any> | undefined;
    try {
      identity = await verify(bearerToken);
      if (identity.userId) {
        // token was accepted
        next();
      }
    } catch (error) {
      res.json({ authenticated: false, error });
    }
  }
}

// apply routes to express app
app.use('/api/login', login);
app.use('/api/public', publicRoute);
app.use('/api/protected', verifyBearerToken, protectedRoute);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
