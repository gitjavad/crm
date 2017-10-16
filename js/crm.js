
$(document).ready(function() {

    $('form').ajaxForm({

        dataType: 'json',
        success: processJson
    });

    function processJson(data) {
        var frm_login = document.getElementById('frm_login');
        var main_page = document.getElementById('main_page');
console.log(data.message)

        frm_login.className = frm_login.className.replace(/\b slideInLeft\b/, '');
        frm_login.className += ' slideOutRight';
        main_page.style.cssText = 'display:block';
        var table = document.getElementById('body_list');
        var row = table.insertRow(0);
        var col1 = row.insertCell(0);
        var col2 = row.insertCell(1);
        var col3 = row.insertCell(2);
        var col4 = row.insertCell(3);
        var col5 = row.insertCell(4);

        col1.innerHTML = data.code_product;
        col2.innerHTML = data.material;
        col3.innerHTML = data.price_co;
        col4.innerHTML = data.company;
        col5.innerHTML = data.des;


    }

});

