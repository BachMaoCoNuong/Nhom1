document.addEventListener("DOMContentLoaded",function(){
    /* suggestions */
    const search__suggestions__input = document.querySelector('.search-input');
    const search__suggestions = document.querySelector('.search__suggestions');
    search__suggestions__input.onclick = function(){
        search__suggestions.classList.toggle('search__suggestions-active');
    }
    /* login and register */
    const icon__login = document.querySelector('.navbar__login');
    const modal = document.querySelector('.modal');
    const auth__form = document.querySelectorAll('.auth-form');
    const icon__close = document.querySelectorAll('.auth-form__icon');
    const modal__overlay = document.querySelector('.modal__overlay');
    const go__register = document.querySelectorAll('.form__go-register');
    icon__login.onclick = function(){
        modal.classList.add('modal__active');
        auth__form[0].classList.add('auth-form__active');
    }
    for(var i = 0; i < icon__close.length ;i++){
        icon__close[i].onclick = function(){
            modal.classList.remove('modal__active');
            for(var i = 0; i < auth__form.length; i++){
                auth__form[i].classList.remove('auth-form__active');
            }
        }
    }
    modal__overlay.onclick = function(){
        modal.classList.remove('modal__active');
        for(var i = 0; i < auth__form.length; i++){
            auth__form[i].classList.remove('auth-form__active');
        }
    }
    for(var i = 0; i < go__register.length ;i++){
        go__register[i].onclick = function(){
            for(var j = 0; j < auth__form.length; j++){
                auth__form[j].classList.toggle('auth-form__active');
            }
        }
    }
    /* slide navbar mobile */
    const nav__mobile_slideTop = document.querySelectorAll('.nav__m-item__top');
    const icon = document.querySelectorAll('.m-item__icon-mobile');
    for(var i = 0; i < nav__mobile_slideTop.length; i++){
        nav__mobile_slideTop[i].onclick = function(){
            if(this.classList[1] == 'nav_mobile-active'){
                this.classList.remove('nav_mobile-active');
                const slideDown = this.getAttribute('data-slideMobile');
                const slideUp = document.getElementById(slideDown);
                slideUp.classList.remove('hide__m-menu__mobile');
                slideUp.style.height = `0`;
                icon[slideDown].classList.remove('m-item__icon-up');
            }
            else{
                this.classList.add('nav_mobile-active');
                const slideDown = this.getAttribute('data-slideMobile');
                const slideUp = document.getElementById(slideDown);
                slideUp.classList.add('hide__m-menu__mobile');
                if(slideDown == 0){
                    slideUp.style.height = `206px`;
                }
                else if(slideDown == 1){
                    slideUp.style.height = `82.4px`;
                }
                else{
                    slideUp.style.height = `41.2px`;
                }
                icon[slideDown].classList.add('m-item__icon-up');
            }
        }
    }
    const login = document.querySelector('.login');
    const register = document.querySelector('.register');
    const nav__mobile = document.querySelector('.nav__mobile-container');
    const nav_iconClose_mobile = document.querySelector('.auth-form__icon-mobile');
    const nav_modal__mobile = document.querySelector('.nav-modal__mobile');
    const navbar__bar = document.querySelector('.navbar__bar');
    const modal__overlay_mobile = document.querySelector('.modal__overlay-mobile');
    const auth_form__login = document.querySelector('.auth-form__login');
    const auth_form__register = document.querySelector('.auth-form__register');
    navbar__bar.onclick = function(){
        nav__mobile.classList.add('nav__mobile-active');
        nav_modal__mobile.classList.add('modal__active');
    }
    nav_iconClose_mobile.onclick = function(){
        nav__mobile.classList.remove('nav__mobile-active');
        nav_modal__mobile.classList.remove('modal__active');
    }
    modal__overlay_mobile.onclick = function(){
        nav__mobile.classList.remove('nav__mobile-active');
        nav_modal__mobile.classList.remove('modal__active');
    }
    login.onclick = function(){
        nav__mobile.classList.remove('nav__mobile-active');
        nav_modal__mobile.classList.remove('modal__active');
        modal.classList.add('modal__active');
        auth_form__login.classList.add('auth-form__active');
    }
    register.onclick = function(){
        nav__mobile.classList.remove('nav__mobile-active');
        nav_modal__mobile.classList.remove('modal__active');
        modal.classList.add('modal__active');
        auth_form__register.classList.add('auth-form__active');
    }
},false)