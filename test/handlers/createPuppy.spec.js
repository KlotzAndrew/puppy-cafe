const assert = require('assert');
const { createPuppy } = require('../../handlers/createPuppy.js');

describe('createPuppy', () => {
  it('returns created puppy', (done) => {
    const puppyParams = {
      puppy: {
        name: 'pupper!',
      },
    };

    const cb = (idk, response) => {
      assert.equal(response.statusCode, 201);

      const body = JSON.parse(response.body);
      assert.equal(body.name, puppyParams.puppy.name);
      done();
    };

    createPuppy(JSON.stringify(puppyParams), cb);
  });
});
