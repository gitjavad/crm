
$(document).ready(function() {
    $('#Price_list_tb').DataTable({
        "pagingType": "full_numbers"
    });
    $('form').ajaxForm({

        dataType: 'json',
        success: processJson
    });

    function processJson(data) {
        var frm_login = document.getElementById('frm_login');
        var main_page = document.getElementById('main_page');


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

        col1.innerHTML = data.code_product[0];
        col2.innerHTML = data.material[0];
        col3.innerHTML = data.price_co[0];
        col4.innerHTML = data.company[0];
        col5.innerHTML = data.des[0];


    }

});
