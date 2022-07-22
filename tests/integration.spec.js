import supertest from 'supertest';
import app from '../src/app.js';

describe('Process tests', () => {
  it('return sum of all actice process', async () => {
    const result = await supertest(app).get('/process/active');

    expect(result.text).toEqual('R$ 1.087.000,00');
    expect(result.status).toEqual(200);
  });
});
