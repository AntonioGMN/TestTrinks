import { Router } from 'express';
import processRouter from './processRouter.js';

const router = Router();
router.use(processRouter)
router.get('/', (req, res) => {
	res.sendStatus(200);
});

export default router;
