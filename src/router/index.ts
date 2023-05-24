import express from 'express';

const router = express.Router();

router.get('/', (req, res) => res.status(200).json('OKAY'));
router.get('/test', (req, res) => res.status(200).json('TEST-OK'));

export default router;