document.addEventListener("DOMContentLoaded",function(){
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);
    /* rechargecard */
    (function(){
        const pay = $$('.pay');
        const container__pay = $('.container__pay');
        let width__container = 100 * pay.length;
        let width__pay = 100 / pay.length;
        container__pay.style.width = `${width__container}%`;
        for(let i = 0; i < pay.length; i++){
            pay[i].style.width = `${width__pay}%`;
        }
        const rechargecard = $$('.card__item');
        rechargecard.forEach((rechargecard__active,index) => {
            rechargecard__active.onclick = function(){
                if(this.classList.contains('card__item-active') == false){
                    const card__close = $('.card__item.card__item-active');
                    card__close.classList.remove('card__item-active');
                    this.classList.add('card__item-active');
                    let ani = width__pay * index;
                    container__pay.style.transform = `translate3d(-${ani}%,0,0)`;
                }
            }
        })
    })();
},false)