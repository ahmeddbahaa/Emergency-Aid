import app from '../../../app';
import supertest from 'supertest';
import { truncateDB } from '../../../spec/utils';

describe('[E2E] Specialist', function() {

  describe('Testing the Create endpoint', function() {
    beforeEach(async() => {
      await truncateDB();
    });

    // Success scenarios
    it('creates an account', async function() {
      // status code should be 201 `Created`
      const response = await supertest(app)
        .post('/specialists')
        .send({
          name: 'test',
          email: 'test@test.com',
          password: '123456',
          education:'Dr',
          specialization:'stocks',
        });
      expect(response.statusCode).toBe(201);
    });

  });
});