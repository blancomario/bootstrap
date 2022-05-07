import express from 'express';
import { processAuth } from '../controllers/auth.controller';

const router = express.Router();

router.get('/login', processAuth);
router.post('/login', processAuth);

export default router;
