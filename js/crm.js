
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


            frm_login.className = frm_login.className.replace(/\b slideInLeft\b/,'');
            frm_login.className += ' slideOutRight';
            main_page.style.cssText = 'display:block';
            document.getElementById('body_list').append("<tr>"+
            "<td>+ data.code_product+</td>"+
            "<td>+ data.material+</td>"+
           "<td>+ data.price_co+</td>"+
         " <td>+ data.company+</td>"+
     "<td>+ data.des+</td>"+
         "</tr>");
            }

        }

 );
