'use strict';

var assert = require('assert');
var vimeoRegex = require('./index');

function test(str) {
  return vimeoRegex().test(str);
}

var fixtures = {
  plain: {
    ok: [
      'https://vimeo.com/62092214',
      'http://vimeo.com/62092214',
      'vimeo.com/62092214',
      'www.vimeo.com/62092214',
      'vimeo.com/62092214',
      'https://www.vimeo.com/62092214'
    ],
    not_ok: [
      'NONONO',
      'http://vimeo/62092214',
      'http://vimeo.com/foo',
      'http/vimeo.com/123'
    ]
  },
  channels: { 
    ok: [
      'https://vimeo.com/channels/documentaryfilm/128373915',
      'http://vimeo.com/channels/documentaryfilm/128373915'
    ],
    not_ok: [
      'https://vimeo.com/channels/foo-barr/documentaryfilm/128373915',
    ]
  },
  groups: {
    ok: [
      'https://vimeo.com/groups/musicvideo/videos/126199390',
      'http://vimeo.com/groups/musicvideo/videos/126199390'
    ],
    not_ok: [
      'http://vimeo.com/groups/musicvideo/vid/126199390'
    ]
  },
  attributes: {
    ok: [
      'https://vimeo.com/62092214?query=foo'
    ],
    not_ok: [
      'https://vimeo.com.omomom/62092214?query=foo'
    ]
  }
};


describe('vimeo-regex ->', function() {
  describe('should be ok with ->', function() {
    it('plain url', function(done) {
      fixtures.plain.ok.forEach(function (link) {
        assert.ok(test(link), link);
      });
      done();
    });
    it('channels url', function(done) {
      fixtures.channels.ok.forEach(function (link) {
        assert.ok(test(link), link);
      });
      done();
    });
    it('groups url', function(done) {
      fixtures.plain.ok.forEach(function (link) {
        assert.ok(test(link), link);
      });
      done();
    });
    it('attribute url', function(done) {
      fixtures.attributes.ok.forEach(function (link) {
        assert.ok(test(link), link);
      });
      done();
    });
  });
  describe('should falied with ->', function() {
    it('plain url', function(done) {
      fixtures.plain.not_ok.forEach(function (link) {
        assert.equal(test(link), false, link);
      });
      done();
    });
    it('channels url', function(done) {
      fixtures.channels.not_ok.forEach(function (link) {
        assert.equal(test(link), false, link);
      });
      done();
    });
    it('groups url', function(done) {
      fixtures.plain.not_ok.forEach(function (link) {
        assert.equal(test(link), false, link);
      });
      done();
    });
    it('attribute url', function(done) {
      fixtures.attributes.not_ok.forEach(function (link) {
        assert.equal(test(link), false, link);
      });
      done();
    });
  });
});
