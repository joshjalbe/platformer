/* global Phaser */
(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    let opspark = window.opspark;
    window.opspark.door = window.opspark.door || {};
    
    opspark.door.factory = function (game) {
        const 
            assetKey = 'door';
            
        game.door = game.add.group();
        
        let create = {
           onLeft: function (position, delay){
               if (position < 0 || position > game.world.height) { throw new Error(`You are trying to place a door off the stage at ${position}, this is not allowed!`); }
               let door = game.door.create(0, position, assetKey);
               return door;
           },
           onRight: function (position, delay){
               if (position < 0 || position > game.world.height) { throw new Error(`You are trying to place a door off the stage at ${position}, this is not allowed!`); }
               // add 120 px to y position to offset flipped assest //
               let door = game.door.create(game.world.width, position + 120, assetKey);
               door.angle = -180;
               return door;
           }
        };
        
        /**
         * Returns a helper for placing doors.
         */
        opspark.door.create = create;
    };
})(window);