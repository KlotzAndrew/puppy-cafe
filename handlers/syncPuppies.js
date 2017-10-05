const mongoose = require('mongoose');
const bluebird = require('bluebird');
const axios = require('axios');

mongoose.Promise = bluebird;

const PuppyModel = require('../models/puppy.js');

module.exports.syncPuppies = () => {
  const db = mongoose.connect(process.env.MONGODB_URL, {
    useMongoClient: true,
  });

  db.once('open', () => {
    PuppyModel
      .find()
      .then((puppies) => {
        const payload = JSON.stringify(puppies);
        axios.post(process.env.SYNC_URL, payload)
          .then(r => console.log(r)) // eslint-disable-line no-console
          .catch(e => console.log(e)); // eslint-disable-line no-console
      })
      .finally(() => db.close());
  });
};
