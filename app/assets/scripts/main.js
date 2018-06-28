

$(function(){
  $('.banner__side-offer').delay(1000).fadeIn(800);
});

$(".banner__side-offer__close").click(()=>{
  $('.banner__side-offer').css({display: 'none'});

})

let revealOnScroll = new RevealOnScroll();

class RevealOnScroll{
  constructor(){
    this.itemsToReveal = $('#our-offer');
    // this.hideInitially();
  }

  // this.hideInitially(){
  //
  // }
}
