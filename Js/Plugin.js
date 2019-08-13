/* global $, jquery, console, alert */

$(document).ready(function () {
    
    "use strict";
    
     // Trigger Nice Scroll Plugin
    
    $('html').niceScroll({
        
        cursorcolor: '#ff8b38',
        cursorwidth: 5,
        cursorborderradius: 3,
        cursorborder: '1px solid #ff8b38'
    });
    
      // Scroll to top
        
    $(window).scroll(function () {
        
        var navBar = $(".navbar");
            
        if ($(window).scrollTop() >= navBar.height()) {
         
            navBar.addClass('scrolled');
         
        } else {
         
            navBar.removeClass('scrolled');
        }
          
    });
    // Tabs
    
    $('.tab-switch li').click(function(){
        
        $(this).addClass('selected').siblings().removeClass('selected');
        $('.tabs .tabs-content > div').hide();
        $('.' + $(this).data('class')).show();
    })
});