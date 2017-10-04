const { createPuppy } = require('./handlers/createPuppy.js');

module.exports.createPuppy = (event, context, callback) => {
  createPuppy(event.puppy, callback);
};
