const mongoose = require('mongoose');
const bluebird = require('bluebird');

mongoose.Promise = bluebird;

const PuppyModel = require('../models/puppy.js');

module.exports.indexPuppy = (cb) => {
  const db = mongoose.connect(process.env.MONGODB_URL, {
    useMongoClient: true,
  });

  const response = { statusCode: 200, body: [] };

  db.once('open', () => {
    PuppyModel
      .find()
      .then((puppies) => {
        response.body = JSON.stringify(puppies);
        cb(null, response);
      })
      .catch((err) => {
        response.statusCode = 422;
        response.body = JSON.stringify(err.message);
        cb(null, response);
      })
      .finally(() => db.close());
  });
};
