import $ from 'jquery';

export default class MobileMenu{
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
