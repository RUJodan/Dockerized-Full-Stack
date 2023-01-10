import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// local import
import { client } from "../db";

const router = express.Router();

export async function login (req: express.Request, res: express.Response) {
  const data = req.body.login;
  // check for account password hash
  const { rows, rowCount } = await client.query(
    `SELECT id, username, email, password FROM "users" WHERE email=$1`,
    [data.email]
  );

  if (!rowCount) {
    return res.status(400).json({ error: 'Account not found, please try another email or create an account.'})
  }

  const compareHash = await bcrypt.compare(data.password, rows[0].password);

  // passwords match, create session and sign in the client
  if (compareHash) {
    //creating a access token
    const accessToken = jwt.sign({
        username: rows[0].username,
        email: rows[0].email,
        id: rows[0].id,
    }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '1m'
    });

    // Creating refresh token not that expiry of refresh
    //token is greater than the access token
    const refreshToken = jwt.sign({
        username: rows[0].username,
        email: rows[0].email,
        id: rows[0].id,
    }, process.env.REFRESH_TOKEN_SECRET, {
      expiresIn: '2m'
    });

    // Assigning refresh token in http-only cookie
    res.cookie('jwt', refreshToken, {
      httpOnly: true,
      sameSite: 'none', secure: true,
      // maxAge: 24 * 60 * 60 * 1000
      maxAge: 2 * 60 * 1000
    });

    // return accessToken to client
    return res.status(200).json({
      id: rows[0].id,
      username: rows[0].username,
      email: rows[0].email,
      access_token: accessToken,
    });
  } else {
    // password incorrect, reject sign in
    return res.status(400).json({ error: 'Account credentials invalid, please try signing in again.'})
  }
}

router.route('/api/login').post(login);

export default router;