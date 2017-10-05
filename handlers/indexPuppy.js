const mongoose = require('mongoose');
const bluebird = require('bluebird');

mongoose.Promise = bluebird;

const PuppyModel = require('../models/puppy.js');

module.exports.indexPuppy = (cb) => {
  const db = mongoose.connect(process.env.MONGODB_URL, {
    useMongoClient: true,
  });

  const response = { statusCode: 201 };

  db.once('open', () => {
    PuppyModel
      .find()
      .then((puppies) => {
        response.body = puppies;
        cb(null, response);
      })
      .catch((err) => {
        response.statusCode = 422;
        response.body = err.message;
        cb(null, response);
      })
      .finally(() => db.close());
  });
};
