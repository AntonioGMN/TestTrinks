import { Router } from 'express';
import processRouter from './processRouter.js';

const router = Router();
router.use(processRouter)

export default router;
