
import $ from 'jquery';

import waypoints from "../../../node_modules/waypoints/lib/noframework.waypoints.js";
// import * as vars from './vars';
import MobileMenu from './mobileMenu';
import RevealOnScroll from './revealOnScroll';
import StickyH from './stickyHeader';



// $(function(){
//   $('.banner__side-offer').delay(1000).fadeIn(800);
// });
//
// $(".banner__side-offer__close").click(()=>{
//   $('.banner__side-offer').css({display: 'none'});
//
// });

//-------------------------------------------MOBILE MENU

new MobileMenu();

//-------------------------------------------REVEAL ON SCROLL

new RevealOnScroll($('.section'), "45%");
//-------------------------------------------STICKY HEADER

new StickyH();
const $bannerImage = $('.banner__image');
const $bannerSubtitle = $('.banner__subtitle--on-the-right');
const $girlBallContainer = $(".text-container--dark-background");

$bannerImage.on('load', function(){

/* $girlBallContainer.addClass('lazyload');*/ /*to make sure it doesnt
load with banner*/
$bannerSubtitle.addClass('banner__subtitle--on-the-right--show');
})
