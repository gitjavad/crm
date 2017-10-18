
$(document).ready(function() {
var data_list;
var pge_con
var now_page;
var tb_p_num;
now_page=1
    pge_con=10
    var first_pg=0;
    $('#right_sp').click(function () {
       next_page();
       console
    })
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
data_list=data
                var dat_len=data.length;
                    pagenav()



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

                set_table_row();
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
       remove_td();
        $('#s_form').ajaxSubmit({
            dataType:'json',
            success: search
        });


        function search(mydata) {
            data_list=mydata

set_table_row()
            pagenav()
        }
    });
    function next_page() {
        remove_td()
        now_page=now_page+1
        pge_con=now_page*10
        first_pg=first_pg+10
pagenav()
set_table_row()
    }
    function prev_page() {

    }
function pagenav() {
    var b=data_list.length
    var c=b/10;
    c=Math.ceil(c)
    var in_num=document.getElementById('input_num');
    in_num.innerHTML=now_page+" از "+c

}
function remove_td() {
    var table_td = document.getElementById('body_list');
    table_td.innerHTML=""
}

function set_table_row() {
        var db=data_list;
    var table = document.getElementById('body_list');


    if(db.length<10) {
        tb_p_num = db.length
    }
        var d;
    for (d=first_pg;d<pge_con;d++){

        var row = table.insertRow(0);
        var col1 = row.insertCell(0);
        var col2 = row.insertCell(1);
        var col3 = row.insertCell(2);
        var col4 = row.insertCell(3);
        var col5 = row.insertCell(4);
        var col6 = row.insertCell(5);
        col1.innerHTML = db[d].code_product;
        col2.innerHTML = db[d].name;
        col3.innerHTML = db[d].company;
        col4.innerHTML = db[d].price_co;
        col5.innerHTML = db[d].material;
        col6.innerHTML = db[d].des;

    }
}


});

