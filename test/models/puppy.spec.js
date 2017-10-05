const assert = require('assert');
const mongoose = require('mongoose');
const PuppyModel = require('../../models/puppy.js');

describe('Puppy', () => {
  it('inserts into mongo', () => {
    const puppyId = '_id';
    const db = mongoose.connect(process.env.MONGODB_URL).connection;

    const puppy = new PuppyModel({ name: 'pupper!' });

    puppy.save();

    db.once('open', () => {
      PuppyModel.findById(puppy[puppyId], (err, savedPuppy) => {
        assert.equal(err, null);
        assert.equal(puppy, savedPuppy);
      });
    });
  });

  it('valid puppy', () => {
    const puppy = new PuppyModel({ name: 'pupper!' });
    const errs = puppy.validateSync();

    assert.equal(errs, null);
  });

  it('requies name', () => {
    const puppy = new PuppyModel({});
    const errs = puppy.validateSync();

    assert.equal(errs.name, 'ValidationError');
  });
});
