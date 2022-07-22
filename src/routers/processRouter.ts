import { Router } from 'express';
import * as processController from "../controllers/processController.js"

const processRouter = Router();
processRouter.get('/process/active', processController.getActive);

export default processRouter;