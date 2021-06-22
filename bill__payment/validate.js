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
                if(index == 0){
                    function tests(){
                        return input[0].value.length >= 8 ? undefined :  `Nhập tối thiểu 8 ký tự`;
                    }
                    if(tests() == null){
                    }
                    else{
                        var mess = tests();
                        add__blur(input[0].parentElement,mess);
                    }
                }
                else if(index == 3){
                    function tests(){
                        return input[3].value.length >= 8 ? undefined :  `Nhập tối thiểu 8 ký tự`;
                    }
                    if(tests() == null){
                    }
                    else{
                        var mess = tests();
                        add__blur(input[3].parentElement,mess);
                    }
                }
                else if(index == 6){
                    function tests(){
                        return input[6].value.length >= 8 ? undefined :  `Nhập tối thiểu 8 ký tự`;
                    }
                    if(tests() == null){
                    }
                    else{
                        var mess = tests();
                        add__blur(input[6].parentElement,mess);
                    }
                }
                else if(index == 8){
                    function tests(){
                        return input[8].value.length >= 8 ? undefined :  `Nhập tối thiểu 8 ký tự`;
                    }
                    if(tests() == null){
                    }
                    else{
                        var mess = tests();
                        add__blur(input[8].parentElement,mess);
                    }
                }
                else if(index == 10){
                    function tests(){
                        return input[10].value.length >= 8 ? undefined :  `Nhập tối thiểu 8 ký tự`;
                    }
                    if(tests() == null){
                    }
                    else{
                        var mess = tests();
                        add__blur(input[10].parentElement,mess);
                    }
                }
                else if(index == 13){
                    function tests(){
                        return input[13].value.length >= 8 ? undefined :  `Nhập tối thiểu 8 ký tự`;
                    }
                    if(tests() == null){
                    }
                    else{
                        var mess = tests();
                        add__blur(input[13].parentElement,mess);
                    }
                }
            }
            blurs.oninput = function(){
                if(index == 0){
                    remove_oninput(input[0].parentElement);
                    isFormValidCard = true;
                }
                if(index == 3){
                    remove_oninput(input[3].parentElement);
                    isFormValidCard = true;
                }
                if(index == 6){
                    remove_oninput(input[6].parentElement);
                    isFormValidCard = true;
                }
                if(index == 8){
                    remove_oninput(input[8].parentElement);
                    isFormValidCard = true;
                }
                if(index == 10){
                    remove_oninput(input[10].parentElement);
                    isFormValidCard = true;
                }
                if(index == 13){
                    remove_oninput(input[13].parentElement);
                    isFormValidCard = true;
                }
            }
        })
        const card = document.querySelectorAll('.btn__card-buy');
        card.forEach((items,index) => {
            items.onclick = function(){
                if(index == 0){
                    function tests(){
                        return input[0].value.length >= 8 ? undefined :  `Nhập tối thiểu 8 ký tự`;
                    }
                    if(tests() == null){
                    }
                    else{
                        var mess = tests();
                        add__blur(input[0].parentElement,mess);
                        isFormValidCard = false;
                    }
                    if(isFormValidCard == true){

                    }
                }
                if(index == 1){
                    function tests(){
                        return input[3].value.length >= 8 ? undefined :  `Nhập tối thiểu 8 ký tự`;
                    }
                    if(tests() == null){
                    }
                    else{
                        var mess = tests();
                        add__blur(input[3].parentElement,mess);
                        isFormValidCard = false;
                    }
                    if(isFormValidCard == true){

                    }
                }
                if(index == 2){
                    function tests(){
                        return input[6].value.length >= 8 ? undefined :  `Nhập tối thiểu 8 ký tự`;
                    }
                    if(tests() == null){
                    }
                    else{
                        var mess = tests();
                        add__blur(input[6].parentElement,mess);
                        isFormValidCard = false;
                    }
                    if(isFormValidCard == true){

                    }
                }
                if(index == 3){
                    function tests(){
                        return input[8].value.length >= 8 ? undefined :  `Nhập tối thiểu 8 ký tự`;
                    }
                    if(tests() == null){
                    }
                    else{
                        var mess = tests();
                        add__blur(input[8].parentElement,mess);
                        isFormValidCard = false;
                    }
                    if(isFormValidCard == true){

                    }
                }
                if(index == 4){
                    function tests(){
                        return input[10].value.length >= 8 ? undefined :  `Nhập tối thiểu 8 ký tự`;
                    }
                    if(tests() == null){
                    }
                    else{
                        var mess = tests();
                        add__blur(input[10].parentElement,mess);
                        isFormValidCard = false;
                    }
                    if(isFormValidCard == true){

                    }
                }
                if(index == 5){
                    function tests(){
                        return input[13].value.length >= 8 ? undefined :  `Nhập tối thiểu 8 ký tự`;
                    }
                    if(tests() == null){
                    }
                    else{
                        var mess = tests();
                        add__blur(input[13].parentElement,mess);
                        isFormValidCard = false;
                    }
                    if(isFormValidCard == true){

                    }
                }
            }
        })
        function isNumber(numbers) 
        {
            var regex = new RegExp('^[0-9]+$');
            return regex.test(numbers);
        }
    })();
},false)