(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.door = window.opspark.door || {};
    let door = window.opspark.door;
    
    /**
     * init: Initialize all doors.
     * 
     * Add as many doors as necessary to make your level challenging. Note, 
     * doors can only be on the left and right side of the level.
     */ 
    door.init = function (game) {
        ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
        
        door.create.onRight(550);
        door.create.onLeft(550);
        
        // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
    };
})(window);