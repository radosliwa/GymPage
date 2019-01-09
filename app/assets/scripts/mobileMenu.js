import $ from 'jquery';

const $menuIcon = $('.site-header__menu-icon');
const $siteHeader = $('.site-header');
const $navMenu = $('.main-nav__menu');
const $mainNav = $('.main-nav');
const $headerLogo = $('.main-nav__logo');
const $headerLinks = $siteHeader.find('a');

export default class MobileMenu{
  constructor(){
    this.events();

  }
  events(){
    $menuIcon.click(()=>this.toggleMenu());
    $headerLinks.click (()=>this.remove());
    //  mobile menu wont overlap section titles. Remove not Toggle,
    // in order not to have any expansion on bigger viewport

  }
  toggleMenu(){
    $headerLogo.toggleClass('main-nav__logo--hide');
    $navMenu.toggleClass('main-nav__menu--is-visible');
    $mainNav.toggleClass('main-nav--expansion');
    $menuIcon.toggleClass('site-header__menu-icon__X');
  }
  remove(){
    $headerLogo.removeClass('main-nav__logo--hide');
    $navMenu.removeClass('main-nav__menu--is-visible');
    $mainNav.removeClass('main-nav--expansion');
    $menuIcon.removeClass('site-header__menu-icon__X');
  }
}
