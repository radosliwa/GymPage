'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

$(function () {
  $('.banner__side-offer').delay(1000).fadeIn(800);
});

$(".banner__side-offer__close").click(function () {
  $('.banner__side-offer').css({ display: 'none' });
});

var revealOnScroll = new RevealOnScroll();

var RevealOnScroll = function RevealOnScroll() {
  _classCallCheck(this, RevealOnScroll);

  this.itemsToReveal = $('#our-offer');
  // this.hideInitially();
}

// this.hideInitially(){
//
// }
;