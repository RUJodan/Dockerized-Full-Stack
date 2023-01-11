import express from 'express';

const router = express.Router();

export async function logout (req: express.Request, res: express.Response) {
  res.clearCookie('jwt-session').status(200).json({ success: true });
  res.end();
}

router.route('/api/logout').post(logout);

export default router;