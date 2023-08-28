'use strict';
    $( function() {
        $('dt').click(function(){
            $(this).next('dd').slideToggle();
      } );
  
    });