import { Router } from 'express';
import * as processController from "../controllers/processController.js"

const processRouter = Router();
processRouter.get('/process/active', processController.getActive);
processRouter.get('/process/average', processController.getMedia);
processRouter.get('/process/bigValue', processController.bigValueProcess);
processRouter.get('/process/number/trab', processController.processesWithTrab);

export default processRouter;