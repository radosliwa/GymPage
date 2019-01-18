
import $ from 'jquery';

import waypoints from "../../../node_modules/waypoints/lib/noframework.waypoints.js";
import MobileMenu from './mobileMenu';
import RevealOnScroll from './revealOnScroll';
import StickyH from './stickyHeader';



//-------------------------------------------MOBILE MENU

new MobileMenu();

//-------------------------------------------REVEAL ON SCROLL

new RevealOnScroll($('.section'), "45%");
//-------------------------------------------STICKY HEADER

new StickyH();
//-------------------------------------------SIDE OFFER
const $bannerSideOffer = $('.banner__side-offer');
const $sideOfferLink = $bannerSideOffer.find('a');
const $closeX = $bannerSideOffer.find('.banner__side-offer__close');
$(function(){
  $bannerSideOffer.delay(850).fadeIn(800);
  $sideOfferLink.on('click', hideSideOffer);
});

$closeX.click(()=>{
  $bannerSideOffer.addClass('animated bounceOutRight')
  .on('animationend', hideSideOffer);
});

function hideSideOffer(){
  $bannerSideOffer.css({display: 'none'}).removeClass('animated bounceOutRight');
}
