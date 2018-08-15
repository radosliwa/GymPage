
import $ from 'jquery';

import waypoints from "../../../node_modules/waypoints/lib/noframework.waypoints.js";
import * as vars from './vars';
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

new RevealOnScroll($('.section'), "85%");
//-------------------------------------------STICKY HEADER

new StickyH();
