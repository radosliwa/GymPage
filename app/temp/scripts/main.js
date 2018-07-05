'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// $(function(){
//   $('.banner__side-offer').delay(1000).fadeIn(800);
// });
//
// $(".banner__side-offer__close").click(()=>{
//   $('.banner__side-offer').css({display: 'none'});
//
// })
// import 'smoothScroll' from 'jquery-smooth-scroll';


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

//-------------------------------------------STICKY HEADER

var StickyH = function () {
  function StickyH() {
    _classCallCheck(this, StickyH);

    this.siteHeader = $('.site-header');
    this.triggerForHeader = $('.banner__btn-container');
    this.headerLogo = $('.main-nav__logo');
    this.headerLinks = $('.main-nav a');
    this.pageSections = $('.section');
    this.wayPointHeader();
    this.sectionWaypoint();
  }

  _createClass(StickyH, [{
    key: 'wayPointHeader',
    value: function wayPointHeader() {
      var _this = this;

      new Waypoint({
        element: this.triggerForHeader.get(0),
        handler: function handler(direction) {
          if (direction == "down") {
            _this.siteHeader.addClass('site-header--darkerBackground');
            _this.headerLogo.addClass('main-nav__logo--smallerScale');
          } else {
            _this.siteHeader.removeClass('site-header--darkerBackground');
            _this.headerLogo.removeClass('main-nav__logo--smallerScale');
          }
        },
        offset: "35%"
      });
    }
  }, {
    key: 'sectionWaypoint',
    value: function sectionWaypoint() {
      var that = this;
      this.pageSections.each(function () {
        var currentSection = this;
        new Waypoint({
          element: currentSection,
          handler: function handler(direction) {
            that.headerLinks.removeClass('matching-link');

            if (direction == "down") {
              var matchingLink = currentSection.getAttribute('data-match');
              console.log(matchingLink);
              that.headerLinks.removeClass('matching-link');
              $(matchingLink).addClass('matching-link');
            }
          },
          offset: "40%"
        });
        new Waypoint({
          element: currentSection,
          handler: function handler(direction) {
            if (direction == "up") {
              var matchingLink = currentSection.getAttribute('data-match');
              that.headerLinks.removeClass('matching-link');
              $(matchingLink).addClass('matching-link');
            }
          },
          offset: "-40%"
        });
      });
    }
  }]);

  return StickyH;
}();

new StickyH();