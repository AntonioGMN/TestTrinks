import { Request, Response } from 'express';
import * as processService from "../services/processService.js"

export async function getActive(req: Request, res: Response) {
  const sum = await processService.getActiveProcess();

  res.send(sum).status(200);
}

export async function getMedia(req: Request, res: Response) {
  const { clientName, state } = req.body;

  const response = await processService.getMedia(state, clientName);
  res.send(response).status(200);
}

export async function bigValueProcess(req: Request, res: Response) {
  const response = await processService.getBigValue();

  res.send(response.toString()).status(200);
}

export async function processesWithTrab(req: Request, res: Response) {
  const response = await processService.getTrab();

  res.send(response).status(200);
}