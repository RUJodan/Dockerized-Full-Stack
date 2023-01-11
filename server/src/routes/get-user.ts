import express from 'express';
import { client } from "../db";

const router = express.Router();

export async function getUser (req: express.Request, res: express.Response) {
  try {
    const { rows, rowCount } = await client.query(
      `SELECT id, username, email FROM "users" WHERE id=$1`,
      [req.params.userId]
    );

    if (!rowCount) {
      return res.status(400).json({error: 'User not found.'})
    } else {
      return res.json(rows[0]);
    }
  } catch (error) {
    return res.status(400).json({ authenticated: false, error: error });
  }
}

router.route('/api/users/:userId').get(getUser);

export default router;