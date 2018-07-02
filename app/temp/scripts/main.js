'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

$(function () {
  $('.banner__side-offer').delay(1000).fadeIn(800);
});

$(".banner__side-offer__close").click(function () {
  $('.banner__side-offer').css({ display: 'none' });
});

var RevealOnScroll = function () {
  function RevealOnScroll(elements, offset) {
    _classCallCheck(this, RevealOnScroll);

    this.itemsToReveal = elements;
    this.hideInitially();
    this.wayPoints(offset);
  }

  _createClass(RevealOnScroll, [{
    key: 'hideInitially',
    value: function hideInitially() {
      this.itemsToReveal.addClass('reveal-item');
    }
  }, {
    key: 'wayPoints',
    value: function wayPoints(offset) {
      this.itemsToReveal.each(function () {
        var current = this;
        new Waypoint({
          element: current,
          handler: function handler() {
            $(current).addClass('reveal-item--is-visible');
            $('.text-container__why-list').children().each(function (index) {
              $(this).addClass('animated bounceInLeft');
            });
          },

          offset: offset
        });
      });
    }
  }]);

  return RevealOnScroll;
}();

new RevealOnScroll($('.section'), "85%");