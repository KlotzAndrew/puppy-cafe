const { createPuppy } = require('./handlers/createPuppy.js');
const { indexPuppy } = require('./handlers/indexPuppy.js');

module.exports.createPuppy = (event, context, callback) => {
  createPuppy(event.puppy, callback);
};

module.exports.indexPuppy = (event, context, callback) => {
  indexPuppy(callback);
};
