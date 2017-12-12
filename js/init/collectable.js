(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.collectable = window.opspark.collectable || {};
    let collectable = window.opspark.collectable;
    
    let type = {
        db: {assetKey: 'db', points: 100},
        max: {assetKey: 'max', points: 200},
        steve: {assetKey: 'steve', points: 300},
        grace: {assetKey: 'grace', points: 400},
        kennedi: {assetKey: 'kennedi', points: 500}
    };
    
    /**
     * init: Initialize all collectables.
     * 
     * GOAL: Add as many collectables as necessary to make your level challenging.
     * 
     * Use the collectable.create() method to create collectables for the level.
     * See the type Object, above, for the types of collectables and their point values.
     * 
     * collectable.create() takes these arguments:
     *      
     *      collectable.create(type, x, y, gravity, bounce);
     * 
     *      type: The type of the collectable, use the type Object above.
     *      x: The x coordineate for the collectable.
     *      y: The y coordineate for the collectable.
     *      gravity: OPTIONAL The gravitational pull on the collectable.
     *      bounce: OPTIONAL A factor effecting how much the collectable will bounce off platforms, etc.
     */ 
    collectable.init = function (game) {
        ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
        
        // example: 
        collectable.create(type.db, 350, 100, 900);
        collectable.create(type.db, 350, 400, 900);
        collectable.create(type.db, 450, 500, 900);
        collectable.create(type.max, 730, 200, 900);
        collectable.create(type.max, 50, 250, 900);
        collectable.create(type.steve, 450, 300, 900);
        collectable.create(type.steve, 730, 500, 900);
        collectable.create(type.grace, 50, 400, 900);
        collectable.create(type.kennedi, 50, 600, 900);
        
        // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
    };
})(window);