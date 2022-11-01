import express from 'express';

const router = express.Router();

export async function protectedRoute (req: express.Request, res: express.Response) {
  res.json({ message: 'Protected Route success message' });
}

router.route('/api/protected').get(protectedRoute);

export default router;