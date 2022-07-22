import supertest from 'supertest';
import app from '../src/app.js';

describe('Process tests', () => {
  it('return sum of all active processes', async () => {
    const result = await supertest(app).get('/process/active');

    expect(result.text).toEqual('R$ 1.087.000,00');
    expect(result.status).toEqual(200);
  });

  it('return average value of processes in Rio de Janeiro for Empresa A', async () => {
    const body = { state: 'Rio de Janeiro', clienteName: 'Empresa A' };
    const result = await supertest(app).get('/process/average').send(body);

    expect(result.status).toEqual(200);
    expect(result.text).toEqual('R$ 110.000,00');
  });

  it('return average value of processes in Rio de Janeiro for Empresa A', async () => {
    const result = await supertest(app).get('/process/bigValue');

    expect(result.status).toEqual(200);
    expect(result.text).toEqual('2');
  });

  it('return all processes than contains TRAB on number', async () => {
    const result = await supertest(app).get('/process/number/trab');
    console.log(result.text);

    expect(result.status).toEqual(200);
  });
});
