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
    const form__register = document.querySelector('.auth-form__register');
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
},false)