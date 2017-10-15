
$(document).ready(function() {
    $('#Price_list_tb').DataTable( {
        "pagingType": "full_numbers"
    } );
    $('form').ajaxForm({

        dataType:  'json',
        success:   processJson
    });
    function processJson(data) {
var frm_login = document.getElementById('frm_login');
var main_page = document.getElementById('main_page');


        if(data.message){

            frm_login.className = frm_login.className.replace(/\b slideInLeft\b/,'');
            frm_login.className += ' slideOutRight';
            main_page.style.cssText = 'display:block';
            document.getElementById('body_list').append('<tr>');
            document.getElementById('body_list').append('<td>'+ data.code_product+'</td>');
            document.getElementById('body_list').append('<td>'+ data.material+'</td>');
            document.getElementById('body_list').append('<td>'+ data.price_co+'</td>');
            document.getElementById('body_list').append('<td>'+ data.company+'</td>');
            document.getElementById('body_list').append('<td>'+ data.des+'</td>');
            document.getElementById('body_list').append('</tr>');
            }
            else {
               alert(data.message);

            }
        }

}} );
