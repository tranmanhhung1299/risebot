

; (function ($) {
    "use strict";
    var donatProgress = function () {
        $(".content-progress-box").appear(function () {
                $('.progress-bar').each(function() {
                    $(this).find('.progress-content').animate({
                    width:$(this).attr('data-percentage')
                    },3000);
            
                    $(this).find('.progress-number-mark').animate(
                    {left:$(this).attr('data-percentage')},
                    {
                        duration: 3000,
                        step: function(num, fx) {
                            let data = Math.round(num * 100) / 100 ;
                            $(this).find('.percent').html(data + '%');
                        }
                    });  
                });
            });
    }; 


    // Dom Ready
    $(function () { 
        donatProgress();
    });

})(jQuery);