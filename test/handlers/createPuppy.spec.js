const assert = require('assert');
const { createPuppy } = require('../../handlers/createPuppy.js');

describe('createPuppy', () => {
  it.only('returns created puppy', (done) => {
    const puppyParams = {
      name: 'pupper!',
    };

    const cb = (idk, response) => {
      assert.equal(response.statusCode, 201);
      assert.equal(response.body.name, puppyParams.name);
      done();
    };

    createPuppy(puppyParams, cb);
  });
});
