import * as processRepository from '../repositories/processRepository.js'

export async function getActiveProcess() {
    const processActive = await processRepository.getActive();

    let sum = 0;
    for(let i=0; i<processActive.length; i++){
        sum += processActive[i].value;
    }

   return toReal(sum)
}

function toReal(value: number){
  const div = value/100
  return 'R$ '+div.toLocaleString('pt-br')+',00'
}