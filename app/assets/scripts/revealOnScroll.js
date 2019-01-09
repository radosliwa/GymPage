
import $ from 'jquery';

const $whyUsList = $('.text-container__why-list');

export default class RevealOnScroll{
  constructor(elements, offset){
    this.itemsToReveal = elements;
    this.hideInitially();
    this.wayPoints(offset);
    
  }

  hideInitially(){
    this.itemsToReveal.addClass('reveal-item');
  }

  wayPoints(offset){
    this.itemsToReveal.each(function(){
      let current = this;
      new Waypoint({
        element: current,
        handler: function() {
          $(current).addClass('reveal-item--is-visible');
          $whyUsList.children().each(function(){
            $(this).addClass('animated bounceInLeft');
          })

        },

        offset: offset
      });
    });
  }
}
