document.addEventListener("DOMContentLoaded",function(){
    const input = document.querySelectorAll('.auth-form__input');
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
    var isFormValidLogin = true;
    var isFormValidRegister = true;
    var isFormValidNumber = true;
    input.forEach((blurs,index) =>{
        blurs.onblur = function(){
            if(index == 0){
                function tests(){
                    return input[0].value.length >= 5 ? undefined :  `Vui lòng nhập tối thiểu 5 kí tự`;
                }
                if(tests() == null){
                }
                else{
                    var mess = tests();
                    add__blur(input[0].parentElement,mess);
                }
            }
            else if(index == 1){
                function tests(){
                    return input[1].value.length > 0  ? undefined :  `Vui lòng không bỏ trống trường này`;
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
                    return input[2].value.length >= 5 ? undefined :  `Vui lòng nhập tối thiểu 5 kí tự`;
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
                    return sdt(input[3].value)  ? undefined :  `Trường này phải là sdt`;
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
                    return input[4].value.length >= 4  ? undefined :  `Hãy nhập mã gồm 4 ký tự`;
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
                isFormValidLogin = true;
            }
            if(index == 1){
                remove_oninput(input[1].parentElement);
                isFormValidLogin = true;
            }
            if(index == 2){
                remove_oninput(input[2].parentElement);
                isFormValidRegister = true;
            }
            if(index == 3){
                remove_oninput(input[3].parentElement);
                isFormValidRegister = true;
            }
            if(index == 4){
                remove_oninput(input[4].parentElement);
                isFormValidRegister = true;
            }
        }
    })
    const login = document.querySelector('.auth-form__submit-login');
    const register = document.querySelector('.auth-form__submit-register');
    const number = document.querySelector('.auth-form__submit-number');
    number.onclick = function(){
        for(var i = 0; i < input.length;i++){
            if(i == 2){
                function tests(){
                    return input[2].value.length >= 5 ? undefined :  `Vui lòng nhập tối thiểu 5 kí tự`;
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
                    return sdt(input[3].value)  ? undefined :  `Trường này phải là sdt`;
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
    register.onclick = function(){
        for(var i = 0; i < input.length;i++){
            if(i == 2){
                function tests(){
                    return input[2].value.length >= 5 ? undefined :  `Vui lòng nhập tối thiểu 5 kí tự`;
                }
                if(tests() == null){
                }
                else{
                    var mess = tests();
                    add__blur(input[2].parentElement,mess);
                    isFormValidRegister = false;
                }
            }
            else if(i == 3){
                function tests(){
                    return sdt(input[3].value)  ? undefined :  `Trường này phải là sdt`;
                }
                if(tests() == null){
                }
                else{
                    var mess = tests();
                    add__blur(input[3].parentElement,mess);
                    isFormValidRegister = false;
                }
            }
            else if(i == 4){
                function tests(){
                    return input[4].value.length >= 4  ? undefined :  `Hãy nhập mã gồm 4 ký tự`;
                }
                if(tests() == null){
                }
                else{
                    var mess = tests();
                    add__blur(input[4].parentElement,mess);
                    isFormValidRegister = false;
                }
            }
        }
        if(isFormValidRegister == true){
           
        }
    }
    login.onclick = function(evt){
        for(var i = 0; i < input.length;i++){
            if(i == 0){
                function tests(){
                    return input[0].value.length >= 5 ? undefined :  `Vui lòng nhập tối thiểu 5 kí tự`;
                }
                if(tests() == null){
                }
                else{
                    var mess = tests();
                    add__blur(input[0].parentElement,mess);
                    isFormValidLogin = false;
                }
            }
            else if(i == 1){
                function tests(){
                    return input[1].value.length > 0  ? undefined :  `Vui lòng không bỏ trống trường này`;
                }
                if(tests() == null){
                }
                else{
                    var mess = tests();
                    add__blur(input[1].parentElement,mess);
                    isFormValidLogin = false;
                }
            }
        }
        if(isFormValidLogin == true){
           
        }
    }
    function validateEmail(email) 
    {
        var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return regex.test(email);
    }
    function sdt(sdt) 
    {
        var regex = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;
        return regex.test(sdt);
    }
},false)