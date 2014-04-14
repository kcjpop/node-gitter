/* jshint node:true, unused:true */

var assert = require('assert');
var Gitter = require('../lib/gitter.js');

if (!process.env.TOKEN) {
  console.log('========================================');
  console.log('You need to provide a valid OAuth token:');
  console.log('$ TOKEN=<your_token> npm test');
  console.log('========================================\n');
  process.exit(1);
}

describe('Gitter Users', function() {
  var gitter;

  before(function() {
    gitter = new Gitter(process.env.TOKEN);
  });

  it('should fetch the current user cb', function(done) {
    gitter.currentUser(function(err, user) {
      assert.equal(user.username, 'node-gitter');
      done();
    });
  });

  it('should fetch the current user', function(done) {
    gitter.currentUser()
    .then(function(user) {
      assert.equal(user.username, 'node-gitter');
      done();
    });
  });


  it('should fetch the user rooms', function(done) {
    gitter.currentUser().then(function(user) {
      user.rooms().then(function(rooms) {
        assert(rooms.length !== 0);
        done();
      });
    });
  });

  it('should fetch the user rooms', function(done) {
    gitter.currentUser().then(function(user) {
      user.rooms().then(function(rooms) {
        assert(rooms.length !== 0);
        done();
      });
    });
  });

  it('should fetch the user repos', function(done) {
    gitter.currentUser().then(function(user) {
      user.repos().then(function(repos) {
        assert(repos.length !== 0);
        done();
      });
    });
  });

  it('should fetch the user orgs', function(done) {
    gitter.currentUser().then(function(user) {
      user.orgs().then(function(orgs) {
        assert(orgs.length !== 0);
        done();
      });
    });
  });

  it('should fetch the user channels', function(done) {
    gitter.currentUser().then(function(user) {
      user.channels().then(function(channels) {
        assert(channels.length !== 0);
        done();
      });
    });
  });

  it('should fail when fidning an invalid user', function(done) {
    gitter.users.find('invalid')
    .then(function() {})
    .fail(function() {
      done();
    });
  });

  it('should fail when fidning an invalid user with cb', function(done) {
    gitter.users.find('invalid', function(err, user) {
      assert(err);
      done();
    });
  });



});