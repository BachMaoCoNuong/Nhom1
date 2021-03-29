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
    for(var i = 0; i < nav__mobile_slideTop.length; i++){
        nav__mobile_slideTop[i].onclick = function(){
            if(this.classList[1] == 'nav_mobile-active'){
                this.classList.remove('nav_mobile-active');
                const slideDown = this.getAttribute('data-slideMobile');
                const slideUp = document.getElementById(slideDown);
                slideUp.classList.remove('hide__m-menu__mobile');
                slideUp.style.height = `0`;
            }
            else{
                this.classList.add('nav_mobile-active');
                const slideDown = this.getAttribute('data-slideMobile');
                const slideUp = document.getElementById(slideDown);
                slideUp.classList.add('hide__m-menu__mobile');
                if(slideDown == 'slide0'){
                    slideUp.style.height = `206px`;
                }
                else if(slideDown == 'slide1'){
                    slideUp.style.height = `82.4px`;
                }
                else{
                    slideUp.style.height = `41.2px`;
                }
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
    /* tienich__btn-slide */
    /* Tienich con */
    const btn__tienich = document.querySelectorAll('.btn__tienich');
    for(var i = 0; i < btn__tienich.length; i++){
        btn__tienich[i].onclick = function(){
            if(this.classList[2] == null){
                const btn__tienich__remove = document.querySelector('.patch-container__absolute-active .btn__tienich-active');
                btn__tienich__remove.classList.remove('btn__tienich-active');
                this.classList.add('btn__tienich-active');
                const slide__con__active = this.getAttribute('data-slideTienIchCon');
                const slide__con = '.patch-container__absolute-active .' + slide__con__active;
                const slide__con__display = document.querySelector(slide__con);
                const slide__con__none = document.querySelectorAll('.patch-container__absolute-active .tienich__box-content');
                for(var k = 0; k < slide__con__none.length; k++){
                    slide__con__none[k].classList.remove('tienich__box-content__active');
                }
                slide__con__display.classList.add('tienich__box-content__active');
            }
        }
    }
     /* Tienich lon */
     const btn__tienich__big = document.querySelectorAll('.tienich__tab-item');
     for(var i = 0; i < btn__tienich__big.length; i++){
         btn__tienich__big[i].onclick = function(){
            if(this.classList[2] == null){
                for(var j = 0; j < btn__tienich__big.length; j++){
                    btn__tienich__big[j].classList.remove('tienich__tab-item__active');
                }
                this.classList.add('tienich__tab-item__active');
                const slide__active = this.getAttribute('data-slideTienIch');
                const slide__display = document.getElementById(slide__active);
                const slide__none = document.querySelectorAll('.tienich__patch-container__absolute');
                for(var k = 0; k < slide__none.length; k++){
                    slide__none[k].classList.remove('patch-container__absolute-active');
                }
                slide__display.classList.add('patch-container__absolute-active');
            }   
         }
    }
    /* tutorial */
    const tutorial__list__item = document.querySelectorAll('.tutorial__list-item');
    for(var i = 0; i < tutorial__list__item.length; i++){
        tutorial__list__item[i].onclick = function(){
            if(this.classList[1] == null){
                const tutorial__list__item__hidden = document.querySelectorAll('.tutorial__body-active .tutorial__list-item');
                for(var i = 0; i < tutorial__list__item__hidden.length; i++){
                    tutorial__list__item__hidden[i].classList.remove('tutorial__list-item__active');
                }
                this.classList.add('tutorial__list-item__active');
                const phone__display = this.getAttribute('data-phone');
                const display__phone = document.querySelector('.tutorial__body-active .display__phone-list');
                if(phone__display == 'phone0'){
                    display__phone.style.transform = `translate3d(0, 0, 0)`;
                }
                else if(phone__display == 'phone1'){
                    display__phone.style.transform = `translate3d(-250px, 0, 0)`;
                }
                else if(phone__display == 'phone2'){
                    display__phone.style.transform = `translate3d(-500px, 0, 0)`;
                }
                else if(phone__display == 'phone3'){
                    display__phone.style.transform = `translate3d(-750px, 0, 0)`;
                }
                else if(phone__display == 'phone4'){
                    display__phone.style.transform = `translate3d(-1000px, 0, 0)`;
                }
            }
        }
    }
    const tutorial__btn = document.querySelectorAll('.tutorial__btn');
    for(var i = 0; i < tutorial__btn.length; i++){
        tutorial__btn[i].onclick = function(){
            if(this.classList[1] == null){
                for(var j = 0; j < tutorial__btn.length; j++){
                    tutorial__btn[j].classList.remove('tutorial__btn-active');
                }
                this.classList.add('tutorial__btn-active');
                const tutorial__body_visible = this.getAttribute('data-tutorial');
                const tutorial__body = document.getElementById(tutorial__body_visible);
                const tutorial__body_hidden = document.querySelectorAll('.tutorial__body');
                for(var j = 0; j < tutorial__body_hidden.length; j++){
                    tutorial__body_hidden[j].classList.remove('tutorial__body-active');
                }
                tutorial__body.classList.add('tutorial__body-active');
            }
        }
    }
},false)