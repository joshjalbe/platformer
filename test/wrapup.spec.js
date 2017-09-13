var _ = require('underscore');
var Browser = require('zombie');
var assert = require('chai').assert;
var expext = require('chai').expect;
var sinon = require('sinon');

var browser = new Browser();

const server = 'http://localhost:7777/index.html';

describe('Platformer', function(){

  before(function(done) {
    browser.visit(server, done);
  });

  describe('cannons.js', function() {
    before(function(done) {
      var cannon = window.opspark.cannon;

      var spyLeft = sinon.spy(cannon, create.onLeft);
      var spyRight = sinon.spy(cannon, create.onRight);
      var spyTop = sinon.spy(cannon, create.onTop);
      var spyBottom = sinon.spy(cannon, create.onBottom);

      var cannonCount = 0;
    });

  //   it("should call onTop once with each argument", function () {
  //     var cannon = window.opspark.cannon;
  //     var spy = sinon.spy(cannon.create, "onTop");
  
  //     cannon.create.onTop(42);
  //     cannon.create.onTop(1);
  
  //     assert(spy.withArgs(42).calledOnce);
  //     assert(spy.withArgs(1).calledOnce);
  // })

    it('should have three distinct cannons', function(done) {   
      var checkForDoubles = function(spy, count) {
        var coords = [];
        for (var i = 0; i < count; i++) {
          coordinate = spy.getCall(i).args[0];
          if (coords.includes(coordinate)) {
            return true;
          }
          coords[i] = coordinate;
        }
        return false;
      }

      var cannon = window.opspark.cannon;
      
      var spyLeft = sinon.spy(cannon, create.onLeft);
      var spyRight = sinon.spy(cannon, create.onRight);
      var spyTop = sinon.spy(cannon, create.onTop);
      var spyBottom = sinon.spy(cannon, create.onBottom);

      var cannonCount = 0;
      
      var leftCount = spyLeft.callCount();
      var rightCount = spyRight.callCount();
      var topCount = spyTop.callCount();
      var bottomCount = spyBottom.callCount();

      cannonCount += leftCount + rightCount + topCount + bottomCount;
      assert.isAtleast(cannonCount, 3, 'you must create at least 3 cannons');

      var hasDoubles = false;
      hasDoubles = hasDoubles || checkForDoubles(spyLeft, leftCount);
      hasDoubles = hasDoubles || checkForDoubles(spyRight, rightCount);
      hasDoubles = hasDoubles || checkForDoubles(spyTop, topCount);
      hasDoubles = hasDoubles || checkForDoubles(spyBottom, bottomCount);
      
      assert.isNotTrue(hasDoubles, 'there are doubled cannons')
      done();
    });
  });
  
  describe('collectable.js', function() {
    before(function(done) {
      var collectable = window.opspark.collectable;
      
      var spy = sinon.spy(collectable, create);
      
      var collectableCount = 0;
    });

    it('should have three different types of collectibles', function(done) {       
      assert.isAtLeast(spy.callCount(), 3, 'you must create at least 3 collectables')
      done();
    });
  });
  
  describe('platform.js', function() {
    it('should have three platforms with different position values', function(done) {       
      
      done();
    });
  });
});
