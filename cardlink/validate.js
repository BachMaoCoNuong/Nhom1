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
        var isFormValidNumber = true;
        var isFormValidCard = true;
        input.forEach((blurs,index) =>{
            blurs.onblur = function(){
                if(index == 1){
                    function tests(){
                        return isNumber(input[1].value) && input[1].value >= 10000 ? undefined :  `Nhập số và nhập tối thiểu 10000đ`;
                    }
                    if(tests() == null){
                    }
                    else{
                        var mess = tests();
                        add__blur(input[1].parentElement,mess);
                    }
                }
                else if(index == 2){
                    function tests(){
                        return isNumber(input[2].value) && input[2].value.length >= 8 ? undefined :  `Nhập số và nhập tối thiểu 8 ký tự`;
                    }
                    if(tests() == null){
                    }
                    else{
                        var mess = tests();
                        add__blur(input[2].parentElement,mess);
                    }
                }
                else if(index == 3){
                    function tests(){
                        return input[3].value.length >= 5 ? undefined :  `Vui lòng nhập tối thiểu 5 kí tự`;
                    }
                    if(tests() == null){
                    }
                    else{
                        var mess = tests();
                        add__blur(input[3].parentElement,mess);
                    }
                }
                else if(index == 4){
                    function tests(){
                        return input[4].value.length > 0  ? undefined :  `Không thể bỏ trống trường này`;
                    }
                    if(tests() == null){
                    }
                    else{
                        var mess = tests();
                        add__blur(input[4].parentElement,mess);
                    }
                }
            }
            blurs.oninput = function(){
                if(index == 0){
                    remove_oninput(input[0].parentElement);
                    isFormValidNumber = true;
                }
                if(index == 1){
                    remove_oninput(input[1].parentElement);
                    isFormValidNumber = true;
                }
                if(index == 2){
                    remove_oninput(input[2].parentElement);
                    isFormValidNumber = true;
                }
                if(index == 3){
                    remove_oninput(input[3].parentElement);
                    isFormValidNumber = true;
                }
                if(index == 4){
                    remove_oninput(input[4].parentElement);
                    var isFormValidCard = true;
                }
            }
        })
        const number = document.querySelector('.send__code');
        const card = document.querySelector('.btn__card-buy');
        number.onclick = function(){
            for(var i = 0; i < input.length;i++){
                if(i == 1){
                    function tests(){
                        return isNumber(input[1].value) && input[1].value >= 10000 ? undefined :  `Nhập số và nhập tối thiểu 10000đ`;
                    }
                    if(tests() == null){
                    }
                    else{
                        var mess = tests();
                        add__blur(input[1].parentElement,mess);
                        isFormValidNumber = false;
                    }
                }
                else if(i == 2){
                    function tests(){
                        return isNumber(input[2].value) && input[2].value.length >= 8 ? undefined :  `Nhập số và nhập tối thiểu 8 ký tự`;
                    }
                    if(tests() == null){
                    }
                    else{
                        var mess = tests();
                        add__blur(input[2].parentElement,mess);
                        isFormValidNumber = false;
                    }
                }
                else if(i == 3){
                    function tests(){
                        return input[3].value.length >= 5 ? undefined :  `Vui lòng nhập tối thiểu 5 kí tự`;
                    }
                    if(tests() == null){
                    }
                    else{
                        var mess = tests();
                        add__blur(input[3].parentElement,mess);
                        isFormValidNumber = false;
                    }
                }
            }
            if(isFormValidNumber == true){
            
            }
        }
        card.onclick = function(){
            for(var i = 0; i < input.length;i++){
                if(i == 1){
                    function tests(){
                        return isNumber(input[1].value) && input[1].value >= 10000 ? undefined :  `Nhập số và nhập tối thiểu 10000đ`;
                    }
                    if(tests() == null){
                    }
                    else{
                        var mess = tests();
                        add__blur(input[1].parentElement,mess);
                        isFormValidNumber = false;
                    }
                }
                else if(i == 2){
                    function tests(){
                        return isNumber(input[2].value) && input[2].value.length >= 8 ? undefined :  `Nhập số và nhập tối thiểu 8 ký tự`;
                    }
                    if(tests() == null){
                    }
                    else{
                        var mess = tests();
                        add__blur(input[2].parentElement,mess);
                        isFormValidNumber = false;
                    }
                }
                else if(i == 3){
                    function tests(){
                        return input[3].value.length >= 5 ? undefined :  `Vui lòng nhập tối thiểu 5 kí tự`;
                    }
                    if(tests() == null){
                    }
                    else{
                        var mess = tests();
                        add__blur(input[3].parentElement,mess);
                        isFormValidNumber = false;
                    }
                }
                else if(i == 4){
                    function tests(){
                        return input[4].value.length > 0  ? undefined :  `Không thể bỏ trống trường này`;
                    }
                    if(tests() == null){
                    }
                    else{
                        var mess = tests();
                        add__blur(input[4].parentElement,mess);
                        isFormValidCard = false;
                    }
                }
            }
            if(isFormValidNumber == true && isFormValidCard == true){
            
            }
        }
        function isNumber(numbers) 
        {
            var regex = new RegExp('^[0-9]+$');
            return regex.test(numbers);
        }
    })();
},false)