import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieparser from 'cookie-parser';
import jwt from 'jsonwebtoken';

// routing imports
import { createAccount } from './routes/create-account';
import { login } from './routes/login';
import { getUser } from './routes/get-user';
import { refresh } from './routes/refresh';
import { logout } from './routes/logout';

dotenv.config();

const PORT = process.env.PORT || 3001;
const app = express();

// set cors and body/cookie parsing
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieparser());

// varification middleware
async function verifyBearerToken(req: express.Request, res: express.Response, next: express.NextFunction) {
  const bearerHeader = req.headers.authorization;
  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];

    // verify token here
    try {
      const decode = jwt.verify(bearerToken, process.env.ACCESS_TOKEN_SECRET);
      if (decode) {
        next();
      }
    } catch (error) {
      res.status(403).json({ error })
    }
  }
}

// apply routes to express app
app.use('/api/create-account', createAccount)
app.use('/api/refresh', refresh);
app.use('/api/login', login);
app.use('/api/logout', logout);
app.use('/api/users/:userId', verifyBearerToken, getUser);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
