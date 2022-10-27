import express from 'express';

const router = express.Router();

export async function test (_req: express.Request, res: express.Response) {
  res.json({ message: 'Hello from server!!!' });
}

router.route('/api/test').post(test);

export default router;