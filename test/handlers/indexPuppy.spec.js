const assert = require('assert');
const { indexPuppy } = require('../../handlers/indexPuppy.js');

describe('createPuppy', () => {
  it('returns created puppy', (done) => {
    const cb = (idk, response) => {
      assert.equal(response.statusCode, 201);
      assert.equal(response.body[0].name, 'pupper!');
      done();
    };

    indexPuppy(cb);
  });
});
