
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
console.log(data.message);
        /*if(data.message){

            frm_login.className = frm_login.className.replace(/\b slideInLeft\b/,'');
            frm_login.className += ' slideOutRight';
            main_page.style.cssText = 'display:block';
            console.log(data.res)

            }
            else {
               alert(data.message);

            }
        }*/

}} );
