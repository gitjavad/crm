
$(document).ready(function() {
    var s_data;
    var data_serch;

    $('body').persiaNumber();
    $('#input_num').characterCounter();
    $('#modal1').modal();

    $(".sub_log").click(function () {
        $('#user_frm').ajaxSubmit({

            dataType: 'json',
            success: processJson
        });

        function processJson(data) {
            /*var i;
            for (i=0;i<data.length;i++){
                console.log(data[i].code_product);
            }*/
            if (data[0].message=="true"){
                my_list_serch(s_len,data)
data_serch =data
                var dat_len=data.length;
                    pagenav(dat_len)



                document.getElementById('main_user_login').style.cssText='display:none';
                document.getElementById('ok_login').style.cssText='display:block';
                $('#modal1').modal('close');
                var frm_login = document.getElementById('frm_login');
                var main_page = document.getElementById('main_page');
                frm_login.className = frm_login.className.replace(/\b slideInLeft\b/, '');
                frm_login.className += ' slideOutRight';
                document.getElementById('body_org').className += 'main_active'
                frm_login.style.cssText='display:none'
                main_page.style.cssText = 'display:block';

                set_table_row(data.length,data)

                }
            else{
                console.log("ohno mother fuck get out")
                document.getElementById('main_user_login').style.cssText='display:none';
                document.getElementById('no_login').style.cssText='display:block';
            }





        }


    })
    var s_len;
    $('#input_serch').keyup(function(){
        $('#s_form').ajaxSubmit({
            dataType:'json',
            success: search
        });
        function search(mydata) {
            set_table_row(mydata.length,mydata)

        }
    });
function pagenav (mydata) {
    var b=mydata
    var c=b/10;
    c=Math.ceil(c)
    var in_num=document.getElementById('input_num');
    in_num.innerHTML="<span class='disabled' ><a class=material-icons>chevron_left</a></span>"+c+'شماره صفحه: ۱ از '+"<span class='waves-effect' ><a class=material-icons>chevron_right</a></span>"


}
function set_table_row(len,_data) {
    var table = document.getElementById('body_list');
    var d;
    for (d=0;d<len;d++){
        var row = table.insertRow(0);
        var col1 = row.insertCell(0);
        var col2 = row.insertCell(1);
        var col3 = row.insertCell(2);
        var col4 = row.insertCell(3);
        var col5 = row.insertCell(4);
        col1.innerHTML = _data[i].code_product;
        col2.innerHTML = _data[i].material;
        col3.innerHTML = _data[i].price_co;
        col4.innerHTML = _data[i].company;
        col5.innerHTML = _data[i].des;

    }
}


});

