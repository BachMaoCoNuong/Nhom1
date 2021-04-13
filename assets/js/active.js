document.addEventListener("DOMContentLoaded",function(){
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);
    /* suggestions */
    (function(){
        const search__suggestions__input = $('.search-input');
        const search__suggestions = $('.search__suggestions');
        search__suggestions__input.onclick = function(){
        search__suggestions.classList.toggle('search__suggestions-active');
    }
    })();
    /* login and register */
    (function(){
        const icon__login = $('.navbar__login');
        const modal = $('.modal');
        const auth__form = $$('.auth-form');
        const icon__close = $$('.auth-form__icon');
        const modal__overlay = $('.modal__overlay');
        const go__register = $$('.form__go-register');
        icon__login.onclick = function(){
            modal.classList.add('modal__active');
            auth__form[0].classList.add('auth-form__active');
        }
        for(var i = 0; i < icon__close.length ;i++){
            icon__close[i].onclick = function(){
                modal.classList.remove('modal__active');
                const tab__close = $('.auth-form.auth-form__active');
                tab__close.classList.remove('auth-form__active');
            }
        }
        modal__overlay.onclick = function(){
            modal.classList.remove('modal__active');
            const tab__close = $('.auth-form.auth-form__active');
            tab__close.classList.remove('auth-form__active');
        }
        for(var i = 0; i < go__register.length ;i++){
            go__register[i].onclick = function(){
                for(var j = 0; j < auth__form.length; j++){
                    auth__form[j].classList.toggle('auth-form__active');
                }
            }
        }
        /* slide navbar mobile */
        const nav__mobile_slideTop = $$('.nav__m-item__top');
        const nav__mobile__slideUp = $$('.nav__m-item__menu'); 
        const nav__mobile__menu = $$(".m-item__menu-list");
        nav__mobile_slideTop.forEach((nav,index) => {
            const count = nav__mobile__slideUp[index];
            nav.onclick = function(){
                if(this.classList[1] == 'nav_mobile-active'){
                    this.classList.remove('nav_mobile-active');
                    count.style.height = `0`;
                }
                else{
                    this.classList.add('nav_mobile-active');
                    count.style.height = nav__mobile__menu[index].offsetHeight + "px";
                }
            }
        })
        const login = $('.login');
        const register = $('.register');
        const nav__mobile = $('.nav__mobile-container');
        const nav_iconClose_mobile = $('.auth-form__icon-mobile');
        const nav_modal__mobile = $('.nav-modal__mobile');
        const navbar__bar = $('.navbar__bar');
        const modal__overlay_mobile = $('.modal__overlay-mobile');
        const auth_form__login = $('.auth-form__login');
        const auth_form__register = $('.auth-form__register');
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
    })();
    /* slide */
    (function(){
        let s = 5000;
        const slide__tablet = $('.slide__tablet');
        const slide__mobile = $('.slide__mobile');
        const time = setInterval(function(){
            const btn__active = $$('.slide__btn-item');
            btn__active.forEach((slide__active,index) => {
                if(slide__active.classList[1] == null){
                    slide__active.classList.add('slide__btn-item__active');
                    if(index == 1){
                        slide__tablet.style.transform = `translate3d(-50%, 0, 0)`;
                        slide__mobile.style.transform = `translate3d(-50%, 0, 0)`;
                    }
                    if(index == 0){
                        slide__tablet.style.transform = `translate3d(0, 0, 0)`;
                        slide__mobile.style.transform = `translate3d(0, 0, 0)`;
                    }
                }
                else{
                    slide__active.classList.remove('slide__btn-item__active');
                }
            })
        },s)
        const slide__btn = $$('.slide__btn-item');
        /* slide click */
        slide__btn.forEach((slide__active,index) => {
            slide__active.onclick = function(){
                if(this.classList[1] == null){
                    const btn__close = $$('.slide__btn-item.slide__btn-item__active');
                    for(var i = 0; i < btn__close.length;i++){
                        btn__close[i].classList.remove('slide__btn-item__active');
                    }
                    this.classList.add('slide__btn-item__active');
                    if(index == 0){
                        slide__tablet.style.transform = `translate3d(0, 0, 0)`;
                        slide__mobile.style.transform = `translate3d(0, 0, 0)`;
                        slide__btn[2].classList.add('slide__btn-item__active');
                    }
                    else if(index == 1){
                        slide__tablet.style.transform = `translate3d(-50%, 0, 0)`;
                        slide__mobile.style.transform = `translate3d(-50%, 0, 0)`;
                        slide__btn[3].classList.add('slide__btn-item__active');
                    }
                    else if(index == 2){
                        slide__tablet.style.transform = `translate3d(0, 0, 0)`;
                        slide__mobile.style.transform = `translate3d(0, 0, 0)`;
                        slide__btn[0].classList.add('slide__btn-item__active');
                    }
                    else if(index == 3){
                        slide__tablet.style.transform = `translate3d(-50%, 0, 0)`;
                        slide__mobile.style.transform = `translate3d(-50%, 0, 0)`;
                        slide__btn[1].classList.add('slide__btn-item__active');
                    }
                }
            }
        })
    })();
    const transition__tab = 200;
    /* tienich__btn-slide */
    (function(){
     /* Tienich lon */
        const btn__tienich__big = $$('.tienich__tab-item');
        const tienich__patch__absolute = $$('.tienich__patch-container__absolute');
        btn__tienich__big.forEach((tienich,index) => {
            const count = tienich__patch__absolute[index];
            tienich.onclick = function(){
                if(this.classList[2] == null){
                    const tab__close = $('.tienich__tab-item.tienich__tab-item__active');
                    tab__close.classList.remove('tienich__tab-item__active');
                    this.classList.add('tienich__tab-item__active');
                    const slide__none = $('.tienich__patch-container__absolute.patch-container__absolute-active');
                    slide__none.classList.remove('fade');
                    setTimeout(function(){
                        slide__none.classList.remove('patch-container__absolute-active');
                    },transition__tab)
                    setTimeout(function(){
                        count.classList.add('patch-container__absolute-active');
                        setTimeout(function(){
                            count.classList.add('fade');
                        },1)       
                    },transition__tab)
                }
            }
        })
        /* Tienich con */
        const btn__tienich = $$('.btn__tienich');
        const tienich__box__content = $$('.tienich__box-content');
        btn__tienich.forEach((tienichcon,index) => {
            const count = tienich__box__content[index];
            tienichcon.onclick = function(){
                if(this.classList[2] == null){
                    const btn__tienich__remove = $('.patch-container__absolute-active .btn__tienich-active');
                    btn__tienich__remove.classList.remove('btn__tienich-active');
                    this.classList.add('btn__tienich-active');
                    const slide__con__none = $('.patch-container__absolute-active .tienich__box-content.tienich__box-content__active');
                    slide__con__none.classList.remove('fade');
                    setTimeout(function(){
                        slide__con__none.classList.remove('tienich__box-content__active');
                    },transition__tab)
                    setTimeout(function(){
                        count.classList.add('tienich__box-content__active');
                        setTimeout(function(){
                            count.classList.add('fade');
                        },1)       
                    },transition__tab)
                }
            }
        })
    })();
    /* tutorial */
    (function(){
        const tutorial__list__item = $$('.tutorial__body-active .tutorial__list-item');
        tutorial__list__item.forEach((tutorial,index) => {
            tutorial.onclick = function(){
                if(this.classList[1] == null){
                    const tutorial__list__item__hidden = $('.tutorial__body-active .tutorial__list-item.tutorial__list-item__active');
                    tutorial__list__item__hidden.style.height = `75px`;
                    tutorial__list__item__hidden.classList.remove('tutorial__list-item__active');
                    this.classList.add('tutorial__list-item__active');
                    const max__height = $('.tutorial__body-active .tutorial__list-item.tutorial__list-item__active .process__body');
                    this.style.height = max__height.offsetHeight + "px";
                    const tutorial__phone = $('.tutorial__body-active .display__phone-list');
                    if(index == '0'){
                        tutorial__phone.style.transform = `translate3d(0, 0, 0)`;
                    }
                    else if(index == '1'){
                        tutorial__phone.style.transform = `translate3d(-250px, 0, 0)`;
                    }
                    else if(index == '2'){
                        tutorial__phone.style.transform = `translate3d(-500px, 0, 0)`;
                    }
                    else if(index == '3'){
                        tutorial__phone.style.transform = `translate3d(-750px, 0, 0)`;
                    }
                    else if(index == '4'){
                        tutorial__phone.style.transform = `translate3d(-1000px, 0, 0)`;
                    }
                }
            }
        })
        const tutorial__btn = $$('.tutorial__btn');
        const tutorial__body = $$('.tutorial__body');
        tutorial__btn.forEach((btn__tutorial,index) => {
            const count = tutorial__body[index];
            btn__tutorial.onclick = function(){
                if(this.classList[1] == null){
                    const tutorial__close = $('.tutorial__btn.tutorial__btn-active');
                    tutorial__close.classList.remove('tutorial__btn-active');
                    this.classList.add('tutorial__btn-active');
                    const tutorial__body_hidden = $('.tutorial__body.tutorial__body-active');
                    tutorial__body_hidden.classList.remove('tutorial__body-active');
                    count.classList.add('tutorial__body-active');
                    const tutorial__list__item = $$('.tutorial__body-active .tutorial__list-item');
                    tutorial__list__item.forEach((tutorial,index) => {
                        tutorial.onclick = function(){
                            if(this.classList[1] == null){
                                const tutorial__list__item__hidden = $('.tutorial__body-active .tutorial__list-item.tutorial__list-item__active');
                                tutorial__list__item__hidden.style.height = `75px`;
                                tutorial__list__item__hidden.classList.remove('tutorial__list-item__active');
                                this.classList.add('tutorial__list-item__active');
                                const max__height = $('.tutorial__body-active .tutorial__list-item.tutorial__list-item__active .process__body');
                                this.style.height = max__height.offsetHeight + "px";
                                const tutorial__phone = $('.tutorial__body-active .display__phone-list');
                                if(index == '0'){
                                    tutorial__phone.style.transform = `translate3d(0, 0, 0)`;
                                }
                                else if(index == '1'){
                                    tutorial__phone.style.transform = `translate3d(-250px, 0, 0)`;
                                }
                                else if(index == '2'){
                                    tutorial__phone.style.transform = `translate3d(-500px, 0, 0)`;
                                }
                                else if(index == '3'){
                                    tutorial__phone.style.transform = `translate3d(-750px, 0, 0)`;
                                }
                                else if(index == '4'){
                                    tutorial__phone.style.transform = `translate3d(-1000px, 0, 0)`;
                                }
                            }
                        }
                    })
                }
            }
        })
    })();
    /* security */
    const security = (function(){
        const security__item = $$('.security__nav-item');
        const security__content = $$('.security__content');
        security__item.forEach((slide,index) => {
            const count = security__content[index];
            slide.onclick = function(){
                if(this.classList[1] == null){
                    const slide__close = $('.security__nav-item.security__active');
                    slide__close.classList.remove('security__active');
                    this.classList.add('security__active');
                    const security__content = $('.security__content.security__content-active');
                    security__content.classList.remove('fade');
                    setTimeout(function(){
                        security__content.classList.remove('security__content-active');
                    },transition__tab)
                    setTimeout(function(){
                        count.classList.add('security__content-active');
                        setTimeout(function(){
                            count.classList.add('fade');
                        },50)
                    },transition__tab)
                }
            }
        })
    }())
},false)