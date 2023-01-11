import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// local import
import { client } from "../db";

const router = express.Router();

export async function refresh (req: express.Request, res: express.Response) {
  if (req.cookies?.jwt) {
    // Destructuring refreshToken from cookie
    const refreshToken = req.cookies.jwt;

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, tokenDetails) => {
      if (err || tokenDetails.username === undefined) {
        res.status(401).json({ error: "Token expired, please log in to continue"});
      }

      // create new access token
      const accessToken = jwt.sign({
        username: tokenDetails.username,
        email: tokenDetails.email,
        id: tokenDetails.id,
      }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '1d'
      });

      // return accessToken to client
      return res.status(200).json({
        username: tokenDetails.username,
        email: tokenDetails.email,
        id: tokenDetails.id,
        access_token: accessToken,
      });
    });
  } else {
    res.status(401).json({ error: "Token expired, please log in to continue"});
  }
}

router.route('/api/refresh').post(refresh);

export default router;