import express from 'express';

const router = express.Router(); // eslint-disable-line new-cap

router.get('/', (req, res) => res.json({ pid: process.pid }));

export default router;
