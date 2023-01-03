import express from 'express';
import { client } from "../db";

const router = express.Router();

export async function getUser (req: express.Request, res: express.Response) {
  try {
    const { rows, rowCount } = await client.query(
      `SELECT * FROM "users" WHERE sub=$1`,
      [req.params.userId]
    );

    if (!rowCount) {
      res.status(400).json({error: 'User not found'})
    } else {
      res.json(rows[0]);
    }
  } catch (error) {
    res.json({ authenticated: false, error: error });
  }
}

router.route('/api/users/:userId').get(getUser);

export default router;