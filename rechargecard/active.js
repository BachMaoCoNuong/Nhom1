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
},false)