document.addEventListener("DOMContentLoaded",function(){
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);
    /* slide */
    (function(){
        let s = 5000;
        const slide__tablet = $('.slide__tablet');
        const slide__mobile = $('.slide__mobile');
        const time = setInterval(function(){
            const btn__active = $$('.slide__btn-item');
            btn__active.forEach((slide__active,index) => {
                if(slide__active.classList.contains('slide__btn-item__active') == false){
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
                if(this.classList.contains('slide__btn-item__active') == false){
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
                if(this.classList.contains('tienich__tab-item__active') == false){
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
                if(this.classList.contains('btn__tienich-active') == false){
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
                if(this.classList.contains('tutorial__list-item__active') == false){
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
                if(this.classList.contains('tutorial__btn-active') == false){
                    const tutorial__close = $('.tutorial__btn.tutorial__btn-active');
                    tutorial__close.classList.remove('tutorial__btn-active');
                    this.classList.add('tutorial__btn-active');
                    const tutorial__body_hidden = $('.tutorial__body.tutorial__body-active');
                    tutorial__body_hidden.classList.remove('tutorial__body-active');
                    count.classList.add('tutorial__body-active');
                    const tutorial__list__item = $$('.tutorial__body-active .tutorial__list-item');
                    tutorial__list__item.forEach((tutorial,index) => {
                        tutorial.onclick = function(){
                            if(this.classList.contains('tutorial__list-item__active') == false){
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