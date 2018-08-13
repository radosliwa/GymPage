
//
// $(function(){
//   $('.banner__side-offer').delay(1000).fadeIn(800);
// });
//
// $(".banner__side-offer__close").click(()=>{
//   $('.banner__side-offer').css({display: 'none'});
//
// })

// import 'smoothScroll' from 'jquery-smooth-scroll';

class MobileMenu{
  constructor(){
    this.menuIcon = $('.site-header__menu-icon');
    this.siteHeader = $('.site-header');
    this.navMenu = $('.main-nav__menu');
    this.mainNav = $('.main-nav');
    this.headerLogo = $('.main-nav__logo');
    this.events();

  }
  events(){

    this.menuIcon.click(this.toggleMenu.bind(this));
  }
  toggleMenu(){
    this.headerLogo.toggleClass('main-nav__logo--hide');
    this.navMenu.toggleClass('main-nav__menu--is-visible');
    this.mainNav.toggleClass('main-nav--expansion');
    this.menuIcon.toggleClass('site-header__menu-icon__X');
  }
}

new MobileMenu();





//-------------------------------------------REVEAL ON SCROLL
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
      let current = this;
      new Waypoint({
        element: current,
        handler: function() {
          $(current).addClass('reveal-item--is-visible');
          $('.text-container__why-list').children().each(function(){
            $(this).addClass('animated bounceInLeft');
          })
        },

        offset: offset
      });
    });
  }
}

new RevealOnScroll($('.section'), "85%");





//-------------------------------------------STICKY HEADER
class StickyH{
  constructor(){
    this.siteHeader = $('.site-header');
    this.triggerForHeader = $('.banner__btn-container');
    this.headerLogo = $('.main-nav__logo');
    this.headerLinks =$('.main-nav a');
    this.pageSections = $('.section');
    this.wayPointHeader();
    this.sectionWaypoint();
    // this.removeLogo();
    }

    // removeLogo(){
    //   const mq = window.matchMedia( "(max-width: 399px)" );
    //   if (mq.matches) {
    //         this.headerLogo.css('display','none');
    //   }
    // }

  wayPointHeader(){
    new Waypoint({
      element: this.triggerForHeader.get(0),
      handler: (direction)=>{
        this.headerLinks.eq(0).removeClass('matching-link'); /*#OUR OFFER IN HEADER
        WONT BE HIGHLIGHTED (DUE TO SECTIONWAYPOINT FUNCTION BELOW) WHEN SCREEN SCROLLS TO BANNER AREA*/

        if(direction == "down"){
          this.siteHeader.addClass('site-header--darkerBackground');
          this.headerLogo.addClass('main-nav__logo--smallerScale');
        }else{
          this.siteHeader.removeClass('site-header--darkerBackground');
          this.headerLogo.removeClass('main-nav__logo--smallerScale');
        }
      },
      offset: "35%"
    });

}
  sectionWaypoint(){
    let that = this;
    this.pageSections.each(function(){
      let currentSection = this;
      new Waypoint({
        element: currentSection,
        handler: function(direction){

          if(direction =="down"){
            // console.log(that.headerLinks.eq(0));
            let matchingLink = currentSection.getAttribute('data-match');
            that.headerLinks.removeClass('matching-link');
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
            that.headerLinks.removeClass('matching-link');
            $(matchingLink).addClass('matching-link');
          }
        },
        offset: "-30%"
      });

    })
  }
}

new StickyH();
