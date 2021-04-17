document.addEventListener("DOMContentLoaded",function(){
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);
    /* rechargecard */
    (function(){
        const rechargecard = $$('.card__item');
        const content__title = $('.rechargecard__content-title');
        const str = 'Thẻ điện thoại ';
        const money = $('.money i');
        const select__menhgia = $('.menhgia');
        const select__soluong = $('.soluong');
        select__menhgia.onclick = function(){
            const coin = select__soluong.value * select__menhgia.value;
            money.innerHTML = `Thành tiền: ` + coin.toLocaleString("en") + ` VNĐ`;
        }
        select__soluong.onclick = function(){
            const coin = select__soluong.value * select__menhgia.value;
            money.innerHTML = `Thành tiền: ` + coin.toLocaleString("en") + ` VNĐ`;
        }
        const category = ['Viettel','Vinaphone','Gmobile','Vietnamobile','Mobifone'];
        rechargecard.forEach((rechargecard__active,index) => {
            rechargecard__active.onclick = function(){
                if(this.classList.contains('card__item-active') == false){
                    const card__close = $('.card__item.card__item-active');
                    card__close.classList.remove('card__item-active');
                    this.classList.add('card__item-active');
                    content__title.innerHTML = str + category[index];
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
                if(this.classList.contains('security__active') == false){
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