import express from 'express';
import bcrypt from 'bcrypt';
import { client } from "../db";

const router = express.Router();

export async function createAccount (req: express.Request, res: express.Response) {
  const data = req.body.account;

  if (!data || !data.email || !data.username || !data.password || !data.passwordConfirm) {
    return res.status(400).json({error: 'Create Account form is missing field(s).'});
  }

  // check for existing email
  const { rowCount: emailCheck } = await client.query(
    `SELECT email FROM "users" WHERE email=$1`,
    [data.email]
  );

  if (emailCheck) {
    return res.status(400).json({ error: 'An account is already associated with this email.'});
  }

  // check for existing username
  const { rowCount: usernameCheck } = await client.query(
    `SELECT username FROM "users" WHERE username=$1`,
    [data.username]
  );

  if (usernameCheck) {
    return res.status(400).json({ error: 'This username has already been used.'});
  }

  // hold all errors to pass back in bulk
  const errors: string[] = [];

  // valid email address
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
    errors.push('Invalid email.');
  }

  // username length requirements
  if (data.username.length < 3 || data.username.length > 30) {
    errors.push('Username must be at least 3 characters, and no more than 30 characters.');
  }

  // password requirements
  if (data.password.length < 3 || data.password.length > 30) {
    errors.push('Password must be at least 3 characters, and no more than 30 characters.');
  }

  // password confirmation must match original password
  if (data.passwordConfirm !== data.password) {
    errors.push('Passwords do not match.');
  }

  if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/.test(data.password)) {
    errors.push('Password does not meet security minimums.');
  }

  if (errors.length) {
    return res.status(400).json({ error: errors.join(' ') });
  } else {
    // verification passed, create account
    // create password salt first
    let salt: string;
    try {
      salt = await bcrypt.genSalt(10);
    } catch (error) {
      return res.status(400).json({ error: 'An unexpected error occured creating your account.'});
    }

    // then create hash using genSalt
    let hash: string;
    try {
      hash = await bcrypt.hash(data.password, salt);
    } catch (error) {
      return res.status(400).json({ error: 'An unexpected error occured creating your account.'});
    }

    try {
      client.query(
        `INSERT INTO "users" ("username", "email", "password", "authenticated") VALUES ($1, $2, $3, $4)`,
        [data.username, data.email, hash, false]
      );
    } catch (error) {
      return res.status(400).json({ error: 'An unexpected error occured creating your account.'});
    }

    return res.status(200).json({ data: "Account successfully created, please login!"});
  }
}

router.route('/api/create-account').post(createAccount);

export default router;