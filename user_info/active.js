document.addEventListener("DOMContentLoaded",function(){
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);
    (function(){
        const modal = $('.modal');
        const form = $('.modal .auth-form');
        const btn__remove = $$('.btn__remove-card');
        btn__remove.forEach((slide,index) => {
            slide.onclick = function(){
                modal.classList.add('modal__active');
                form.classList.add('auth-form__active');
            }
        })
    })()
},false)