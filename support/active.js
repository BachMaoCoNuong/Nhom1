document.addEventListener("DOMContentLoaded",function(){
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);
    (function(){
        const list__help = $$('.list__help-item');
        list__help.forEach((help__item,index) => {
            help__item.onclick = function(){
                if(this.classList.contains('help__item-active') == false){
                    const help__close = $('.list__help-item.help__item-active');
                    help__close.classList.remove('help__item-active');
                    this.classList.add('help__item-active');
                }
            }
        })
    })()
},false)