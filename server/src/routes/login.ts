import express from 'express';
import { pool } from "../db";
import { verify } from "../utils/verify";

const router = express.Router();

export async function login (req: express.Request, res: express.Response) {
  let identity: Record<string, any> | undefined;
  const db = await pool.connect();
  try {
    identity = await verify(req.body.token);
    // query for existing user
    const { rowCount, rows } = await db.query(
      `SELECT sub FROM "users" WHERE sub=$1`,
      [identity.userId]
    );

    if (!rowCount) {
      // insert user
      pool.query(
        `INSERT INTO "users" ("sub", "email") VALUES ($1, $2)`,
        [identity.userId, identity.payload.email]
      );
    }

    // user either exists, or now exists
    // notify client they are authenticated
    res.json({ authenticated: true, user: rows });
  } catch (error) {
    res.json({ authenticated: false, error: error });
  } finally {
    db.release();
  }
}

router.route('/api/login').post(login);

export default router;