const mongoose = require('mongoose');
const bluebird = require('bluebird');

mongoose.Promise = bluebird;

const PuppyModel = require('../models/puppy.js');

module.exports.createPuppy = (body, cb) => {
  const puppyId = '_id';
  const db = mongoose.connect(process.env.MONGODB_URL, {
    useMongoClient: true,
  });

  const response = { statusCode: 201, body: '{}' };
  const params = JSON.parse(body);
  const puppy = new PuppyModel(params.puppy);

  db.once('open', () => {
    puppy
      .save()
      .then((savedPuppy) => {
        response.body = JSON.stringify({ id: savedPuppy[puppyId], name: savedPuppy.name });
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
