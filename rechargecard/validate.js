document.addEventListener("DOMContentLoaded",function(){
    /* Validate */
    (function(){
        const input = document.querySelectorAll('.select__input');
        function remove_oninput(element){
            var message = element.querySelector('.form-message');
            message.innerText = '';
            element.classList.remove('invalid');
        }
        function add__blur(element,messages){
            var message = element.querySelector('.form-message');
            message.innerText = messages;
            element.classList.add('invalid');
        }
        var isFormValidCard = true;
        input.forEach((blurs,index) =>{
            blurs.onblur = function(){
                if(index == 2){
                    function tests(){
                        return input[2].value.length > 0 ? undefined :  `Vui lòng nhập trường này`;
                    }
                    if(tests() == null){
                    }
                    else{
                        var mess = tests();
                        add__blur(input[2].parentElement,mess);
                    }
                }
            }
            blurs.oninput = function(){
                if(index == 2){
                    remove_oninput(input[2].parentElement);
                    isFormValidCard = true;
                }
            }
        })
        const card = document.querySelector('.btn__card-buy');
        card.onclick = function(){
            for(var i = 0; i < input.length;i++){
                if(i == 2){
                    function tests(){
                        return input[2].value.length > 0 ? undefined :  `Vui lòng nhập trường này`;
                    }
                    if(tests() == null){
                    }
                    else{
                        var mess = tests();
                        add__blur(input[2].parentElement,mess);
                        isFormValidCard == false;
                    }
                }
            }
            if(isFormValidCard == true){
            
            }
        }
        function isNumber(numbers) 
        {
            var regex = new RegExp('^[0-9]+$');
            return regex.test(numbers);
        }
    })();
},false)