import express from 'express';

const router = express.Router();

export async function publicRoute (_req: express.Request, res: express.Response) {
  res.json({ message: 'Public Route success message' });
}

router.route('/api/public').post(publicRoute);

export default router;