

$(function(){
  $('.banner__side-offer').delay(1000).fadeIn(800);
});

$(".banner__side-offer__close").click(()=>{
  $('.banner__side-offer').css({display: 'none'});

})



class RevealOnScroll{
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
      var current = this;
      new Waypoint({
        element: current,
        handler: function() {
          $(current).addClass('reveal-item--is-visible');
          $('.text-container__why-list').children().each(function(index){
            $(this).addClass('animated bounceInLeft');
          })
          },

        offset: offset
      });
    });
  }

}

new RevealOnScroll($('.section'), "85%");
