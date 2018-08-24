import $ from 'jquery';

const $menuIcon = $('.site-header__menu-icon');
const $siteHeader = $('.site-header');
const $navMenu = $('.main-nav__menu');
const $mainNav = $('.main-nav');
const $headerLogo = $('.main-nav__logo');

export default class MobileMenu{
  constructor(){
    this.events();

  }
  events(){
    $menuIcon.click(this.toggleMenu.bind(this));
  }
  toggleMenu(){
    $headerLogo.toggleClass('main-nav__logo--hide');
    $navMenu.toggleClass('main-nav__menu--is-visible');
    $mainNav.toggleClass('main-nav--expansion');
    $menuIcon.toggleClass('site-header__menu-icon__X');
  }
}
