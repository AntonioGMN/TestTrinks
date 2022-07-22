import * as processRepository from '../repositories/processRepository.js'
import * as clientRepository from '../repositories/clientRepository.js'

export async function getActiveProcess() {
  const processActive = await processRepository.getActive();

  let sum = 0;
  for(let i=0; i<processActive.length; i++){
    sum += processActive[i].value;
  }

  return toReal(sum);
}

export async function getMedia(state: string, clienteName: string) {
  const {id: clienteId }= await clientRepository.findByName(clienteName);
  const processes = await processRepository.getByClienteIdAndState(clienteId, state);

  let sum = 0;
  let processNumber = processes.length;

  for(let i=0; i<processNumber; i++){
    sum += processes[i].value;
  }

  return toReal(sum/processNumber);
}

export async function getBigValue() {
  const allProcesses = await processRepository.getAll();
  
  const bigProcesses = allProcesses.filter((p) => p.value > 10000000);

  return bigProcesses.length;
}

export async function getTrab() {
  const resulte = await processRepository.getTRAB();

  return resulte;
}

function toReal(value: number){
  const div = value/100;
  return 'R$ '+div.toLocaleString('pt-br')+',00';
}