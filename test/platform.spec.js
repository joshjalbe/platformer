// mock a global window object //
window = {};

const
    _ = require('lodash'),
    expect = require('chai').expect,
    sinon = require('sinon');

describe('platform', function() {
    // REQUIRED MOCKS //
    
    /*
     * mock the opspark.platform namespace, and along the 
     * way, set the create factory method to a spy!
     */
    _.set(window, 'opspark.platform.create', sinon.spy());
    
    // platform.init() requires the game object, so mock it //
    const game = {}
    _.set(game, 'world.width', 10);
    _.set(game, 'world.height', 10);
    
    const
        /*
         * create a local reference so we don't
         * have to keep typing the full path.
         */
        platform = window.opspark.platform,
        /*
         * load the file under test: this will write
         * the init function to the platform object.
         */
        fileUnderTest = require('../js/init/platform');
    
    it('should call platform.create at least once with at least 2 numbers', function() {
        // run the student's code //
        platform.init(game);
        
        // assert function called //
        expect(platform.create.called).to.be.true;
        
        // assert function called with at least two numbers as first args //
        const spyCall = platform.create.getCall(0);
        expect(_.every(_.slice(spyCall.args, 0, 2), arg => typeof arg === 'number')).to.be.true;
    });
});