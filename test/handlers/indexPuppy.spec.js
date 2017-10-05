const assert = require('assert');
const { indexPuppy } = require('../../handlers/indexPuppy.js');

describe('createPuppy', () => {
  it('returns created puppy', (done) => {
    const cb = (idk, response) => {
      assert.equal(response.statusCode, 200);

      const body = JSON.parse(response.body);
      assert.equal(body[0].name, 'pupper!');
      done();
    };

    indexPuppy(cb);
  });
});
