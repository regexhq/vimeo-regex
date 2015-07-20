'use strict';

var assert = require('assert');
var vimeoRegex = require('./index');

function test(str) {
  return vimeoRegex().test(str);
}

var fixtures = {
  invalid: [
    'NoNoNo'
  ],
  shortlinks: [
  ],
  mixed: [
  ],
  attrlink: [
  ]
};

describe('vimeo-regex', function() {
  describe('should match id from', function() {
    it('shortlinks', function(done) {
      fixtures.shortlinks.forEach(function each(link) {
        assert.ok(test(link));
      });
      done();
    });
  });
});
