'use strict';

//グローバルナビゲーションの表示・非表示
$(function() {
  $('.humberger').click(function() {
    $(this).toggleClass('humberger-off');
    $('.mainNav').slideToggle();
  });
});