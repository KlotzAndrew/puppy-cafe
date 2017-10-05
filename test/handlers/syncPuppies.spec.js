const assert = require('assert');
const sinon = require('sinon');
const axios = require('axios');
const { syncPuppies } = require('../../handlers/syncPuppies.js');

describe.skip('createPuppy', () => {
  after(() => { axios.post.restore(); });

  it('syncs puppies', () => {
    sinon.stub(axios, 'post');

    return syncPuppies().then(() => {
      assert(axios.post.calledOnce);
    });
  });
});
