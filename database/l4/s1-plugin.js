// jQueryPlugin
(function($) {

    $.fn.levelApp41 = function(action, options) {

        var settings = $.extend({
            color: "inherit",
            backgroundColor: "inherit"
        }, options);


        if (action === "start") {




            $(".tile").height($("#tile1").width());
            $(".carousel").height($("#tile1").width());
            $(".item").height($("#tile1").width());

            $(window).resize(function() {
                if(this.resizeTO) clearTimeout(this.resizeTO);
                this.resizeTO = setTimeout(function() {
                    $(this).trigger('resizeEnd');
                }, 10);
            });

            $(window).bind('resizeEnd', function() {
                $(".tile").height($("#tile1").width());
                $(".carousel").height($("#tile1").width());
                $(".item").height($("#tile1").width());
            });

            try{
                $('.carousel').carousel();
            }catch(e){
                console.error(e);
            }
            console.log('%s: %d Carousel Start...', action, $('.carousel').length);







        }

        if (action === "stop") {

        }

        return this;
    };

}(jQuery));