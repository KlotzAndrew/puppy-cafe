const { createPuppy } = require('./handlers/createPuppy.js');
const { indexPuppy } = require('./handlers/indexPuppy.js');
const { syncPuppies } = require('./handlers/syncPuppies.js');

module.exports.createPuppy = (event, context, callback) => {
  createPuppy(event.body, callback);
};

module.exports.indexPuppy = (event, context, callback) => {
  indexPuppy(callback);
};

module.exports.syncPuppies = (event, context, callback) => { // eslint-disable-line no-unused-vars
  syncPuppies();
};
