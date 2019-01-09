import $ from 'jquery';
import smoothScroll from "jquery-smooth-scroll";

const $siteHeader = $('.site-header');
const $triggerPointForHeader = $('.banner__btn-container');
const $headerLogo = $('.main-nav__logo');
const $headerLinks = $siteHeader.find('a');
const $learnMoreButton = $('#learn-more');
const $pageSections = $('.section');
const $lazyImages = $('.lazyloaded');

export default class StickyH{
  constructor(){

    this.wayPointHeader();
    this.sectionWaypoint();
    this.addSmoothScroll();
    this.refreshWayPoints();
    }

    refreshWayPoints(){
      $lazyImages.on('load', function(){
        Waypoint.refreshAll();
      });
    }
  wayPointHeader(){
    new Waypoint({
      element: $triggerPointForHeader.get(0),
      handler: (direction)=>{
         $headerLinks.eq(1).removeClass('matching-link');/*#OUR OFFER IN HEADER
        WONT BE HIGHLIGHTED (DUE TO SECTIONWAYPOINT FUNCTION BELOW) WHEN SCREEN SCROLLS TO BANNER AREA*/

        if(direction == "down"){

          $siteHeader.addClass('site-header--darkerBackground');
          $headerLogo.addClass('main-nav__logo--smallerScale');
        }else{

          $siteHeader.removeClass('site-header--darkerBackground');
          $headerLogo.removeClass('main-nav__logo--smallerScale');
        }
      },
      offset: "35%"
    });

}

addSmoothScroll(){
  $headerLinks.smoothScroll({speed:500});
  $learnMoreButton.smoothScroll({speed:500});
}
  sectionWaypoint(){
    let that = this;
    $pageSections.each(function(){
      let currentSection = this;
      new Waypoint({
        element: currentSection,
        handler: function(direction){

          if(direction =="down"){
            // console.log(that.headerLinks.eq(0));
            let matchingLink = currentSection.getAttribute('data-match');
            $headerLinks.removeClass('matching-link');
            $(matchingLink).addClass('matching-link');
          }
        },
        offset: "40%"
      });
      new Waypoint({
        element: currentSection,
        handler: function(direction){

          if(direction =="up"){
            let matchingLink = currentSection.getAttribute('data-match');
            $headerLinks.removeClass('matching-link');
            $(matchingLink).addClass('matching-link');
          }
        },
        offset: "-30%"
      });

    })
  }
}
