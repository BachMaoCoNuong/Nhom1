document.addEventListener("DOMContentLoaded",function(){
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);
    /* rechargecard */
    (function(){
        const rechargecard = $$('.card__item');
        rechargecard.forEach((rechargecard__active,index) => {
            rechargecard__active.onclick = function(){
                if(this.classList[1] == null){
                    const card__close = $('.card__item.card__item-active');
                    card__close.classList.remove('card__item-active');
                    this.classList.add('card__item-active');
                }
            }
        })
    })();


    const transition__tab = 200;
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