document.addEventListener("DOMContentLoaded",function(){
    /* Validate */
    (function(){
        var number = 0;
        var list = JSON.parse(localStorage.getItem('cart'));
        function LoadData() {
            var str = "";
            
            for (x of list) {
                number++;
                str += `  <div onclick = "select({Ma:'${x.Ma}',DichVu:'${x.dichvu}', Gia:${x.gia}, DoiTac:'${x.doitac}'})" class="table__history">
                        <div class="table__history-item">
                            <span>${number}</span>
                        </div>
                        <div class="table__history-item" title="0977263104">
                            <span>${x.Ma}</span>
                        </div>
                        <div class="table__history-item">
                            <span>${x.dichvu}</span>
                        </div>
                        <div class="table__history-item">
                            <span>${x.gia}</span>
                        </div>
                        <div class="table__history-item">
                            <span>${x.doitac}</span>
                        </div>
                        </div>
                 `;
            }
            document.querySelector(".card__content").innerHTML = str;
        }
        LoadData();
        

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
        var check__them = true;
        input.forEach((blurs,index) =>{
            blurs.onblur = function(){
                if(index == 0){
                    function tests(){
                        return input[0].value.length >= 5 ? undefined :  `Nhập tối thiểu 5 ký tự`;
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
                        return input[1].value.length >= 5 ? undefined :  `Nhập tối thiểu 5 ký tự`;
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
                        return isNumber(input[2].value) && input[2].value.length >= 0 ? undefined :  `Nhập số và không bỏ trống`;
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
                        return input[3].value !=  'Dịch vụ'  ? undefined :  `Hãy chọn dịch vụ`;
                    }
                    if(tests() == null){
                    }
                    else{
                        var mess = tests();
                        add__blur(input[3].parentElement,mess);
                    }
                }
            }
            blurs.oninput = function(){
                if(index == 0){
                    remove_oninput(input[0].parentElement);
                    check__them = true;
                }
                if(index == 1){
                    remove_oninput(input[1].parentElement);
                    check__them = true;
                }
                if(index == 2){
                    remove_oninput(input[2].parentElement);
                    check__them = true;
                }
                if(index == 3){
                    remove_oninput(input[3].parentElement);
                    check__them = true;
                }
            }
        })
        const Them = document.querySelectorAll('.btn__search-history');
        Them.forEach((items,index) => {
            items.onclick = function(){
                if(index == 1 || index == 0){
                    for(var i = 0; i < input.length;i++){
                        if(i == 0){
                            function tests(){
                                return input[0].value.length >= 5 ? undefined :  `Nhập tối thiểu 5 ký tự`;
                            }
                            if(tests() == null){
                            }
                            else{
                                var mess = tests();
                                add__blur(input[0].parentElement,mess);
                                check__them = false;
                            }
                        }
                        else if(i == 1){
                            function tests(){
                                return input[1].value.length >= 5 ? undefined :  `Nhập tối thiểu 5 ký tự`;
                            }
                            if(tests() == null){
                            }
                            else{
                                var mess = tests();
                                add__blur(input[1].parentElement,mess);
                                check__them = false;
                            }
                        }
                        else if(i == 2){
                            function tests(){
                                return isNumber(input[2].value) && input[2].value.length >= 0 ? undefined :  `Nhập số và không bỏ trống`;
                            }
                            if(tests() == null){
                            }
                            else{
                                var mess = tests();
                                add__blur(input[2].parentElement,mess);
                                check__them = false;
                            }
                        }
                        else if(i == 3){
                            function tests(){
                                return input[3].value !=  'Dịch vụ'  ? undefined :  `Hãy chọn dịch vụ`;
                            }
                            if(tests() == null){
                            }
                            else{
                                var mess = tests();
                                add__blur(input[3].parentElement,mess);
                                check__them = false;
                            }
                        }
                    }
                    if(index == 0){
                        if(check__them == true){
                            var item = {
                                Ma : input[0].value,
                                doitac: input[1].value,
                                gia : input[2].value,
                                dichvu : input[3].value
                            }
                            var list;
                            if (localStorage.getItem('cart') == null) {
                                list = [item];
                            } 
                            else {
                                list = JSON.parse(localStorage.getItem('cart')) || [];
                                let ok = true;
                                for (let x of list) {
                                    if (x.Ma == item.Ma) {
                                        ok = false;
                                        alert("Mã hoá đơn này đã tồn tại");
                                        break;
                                    }
                                }
                                if(ok){
                                    number++;
                                    list.push(item); 
                                    localStorage.setItem('cart', JSON.stringify(list));
                                    const contents = document.querySelector(".card__content");
                                    contents.innerHTML = contents.innerHTML + `<div onclick = "select({Ma:'${input[0].value}',DichVu:'${input[3].value}', Gia:${input[2].value}, DoiTac:'${input[1].value}'})" class="table__history">
                                    <div class="table__history-item">
                                        <span>${number}</span>
                                    </div>
                                    <div class="table__history-item" title="0977263104">
                                        <span>${input[0].value}</span>
                                    </div>
                                    <div class="table__history-item">
                                        <span>${input[3].value}</span>
                                    </div>
                                    <div class="table__history-item">
                                        <span>${input[2].value}</span>
                                    </div>
                                    <div class="table__history-item">
                                        <span>${input[1].value}</span>
                                    </div>
                                    </div>`;
                                    input[0].value = '';
                                    input[1].value = '';
                                    input[2].value = '';
                                    input[3].value = 'Dịch vụ';
                                    alert("Đã thêm hoá đơn thành công");
                                } 
                            }
                        }
                    }
                    else if(index ==1){
                        if(check__them == true){
                            var item = {
                                Ma : input[0].value,
                                doitac: input[1].value,
                                gia : input[2].value,
                                dichvu : input[3].value
                            }
                            var list;
                            list = JSON.parse(localStorage.getItem('cart')) || [];
                            let ok = false;
                            for (let x of list) {
                                if (x.Ma == item.Ma) {
                                    x.doitac = item.doitac; 
                                    x.gia = item.gia; 
                                    x.dichvu = item.dichvu; 
                                    localStorage.setItem('cart', JSON.stringify(list));
                                    location.reload();
                                    alert('Sửa thành công hoá đơn mã '+ x.Ma);
                                    ok = true;
                                    break;
                                }
                            }
                            if(!ok){
                                alert("Không tìm thấy hoá đơn này");
                            }
                        }
                    }
                }
                else if(index == 2){
                    function tests(){
                        return input[0].value.length >= 5 ? undefined :  `Nhập tối thiểu 5 ký tự`;
                    }
                    if(tests() == null){
                    }
                    else{
                        var mess = tests();
                        add__blur(input[0].parentElement,mess);
                        check__them = false;
                    }
                    if(check__them == true){
                        var list;
                        list = JSON.parse(localStorage.getItem('cart')) || [];
                        let ok = false;
                        for (let x of list) {
                            if (x.Ma == input[0].value) {
                                Xoa(x.Ma);
                                updateCart();
                                location.reload();
                                alert('Xoá thành công hoá đơn mã '+ x.Ma);
                                ok = true;
                                break;
                            }
                        }
                        if(!ok){
                            alert("Không tìm thấy hoá đơn này");
                        }
                    }
                }
            }
        })
        function Xoa(id) {
            var index = list.findIndex(x => x.Ma == id);
            if (index >= 0) {
                list.splice(index, 1);
            }
            LoadData();
        }
        function updateCart() {
            localStorage.setItem('cart', JSON.stringify(list));
        }
        function XoaCart() {
            localStorage.setItem('cart', null);
            location.reload();
        }
        function isNumber(numbers) 
        {
            var regex = new RegExp('^[0-9]+$');
            return regex.test(numbers);
        }
    })();
},false)
function select(element){
    const input__select = document.querySelectorAll('.select__input');
    input__select[0].value = element.Ma;
    input__select[1].value = element.DoiTac;
    input__select[2].value = element.Gia;
    input__select[3].value = element.DichVu;
}