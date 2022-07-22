import { Request, Response } from 'express';
import * as processService from "../services/processService.js"

export async function getActive(req: Request, res: Response) {
  const sum = await processService.getActiveProcess();

  res.send(sum).status(200);
}
