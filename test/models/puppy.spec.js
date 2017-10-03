var assert = require('assert');
const mongoose = require('mongoose');
const PuppyModel = require('../../models/puppy.js')

describe('Puppy', function() {
  it('inserts into mongo', function() {
    db = mongoose.connect('mongodb://0.0.0.0/puppy-cafe-test').connection

    puppy = new PuppyModel({ name: 'pupper!' });

    puppy.save()

    db.once('open', () => {
      PuppyModel.findById(puppy._id, function(err, savedPuppy) {
        assert.equal(err, null)
        assert.equal(puppy, savedPuppy)
      });
    })
  })

  it('valid puppy', function() {
    let errs;
    puppy = new PuppyModel({ name: 'pupper!' });
    errs = puppy.validateSync();

    assert.equal(errs, null);
  });

  it('requies name', function() {
    let errs;
    puppy = new PuppyModel({});
    errs = puppy.validateSync();

    assert.equal(errs.name, "ValidationError");
  })
});
