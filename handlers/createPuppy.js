const mongoose = require('mongoose');
const bluebird = require('bluebird');

mongoose.Promise = bluebird;

const PuppyModel = require('../models/puppy.js');

module.exports.createPuppy = (puppyParams, cb) => {
  const puppyId = '_id';
  const db = mongoose.connect('mongodb://0.0.0.0/puppy-cafe-test', {
    useMongoClient: true,
  });

  const response = { statusCode: 201 };
  const puppy = new PuppyModel(puppyParams);

  db.once('open', () => {
    puppy
      .save()
      .then((savedPuppy) => {
        response.body = { id: savedPuppy[puppyId], name: savedPuppy.name };
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
