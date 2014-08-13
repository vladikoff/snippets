// jQueryPlugin
(function($) {
    
    $.fn.levelApp40 = function(action, options) {

        var settings = $.extend({
            color: "inherit",
            backgroundColor: "inherit"
        }, options);


        if (action === "start") {
            $('.carousel').carousel();
        }
        
        if (action === "stop") {
            
        }

        return this;
    };
    
}(jQuery));