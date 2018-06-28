'use strict';

$(function () {
  $('.banner__side-offer').delay(1000).fadeIn(800);
});

$(".banner__side-offer__close").click(function () {
  $('.banner__side-offer').css({ display: 'none' });
});