
$(document).ready(function() {
var data_list;
var pge_con
var now_page;
var tb_p_num;
now_page=1
    pge_con=10
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

                set_table_row(data);
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

set_table_row(mydata)
            pagenav(mydata.length)
        }
    });
    function next_page() {
        now_page=now_page+1
        pge_con=pge_con+10


    }
    function prev_page() {

    }
function pagenav (mydata) {
    var b=mydata
    var c=b/10;
    c=Math.ceil(c)
    var in_num=document.getElementById('input_num');
    in_num.innerHTML=now_page+" از "+c

}
function remove_td() {
    var table_td = document.getElementById('body_list');
    table_td.innerHTML=""
}

function set_table_row(db) {
    var table = document.getElementById('body_list');

    tb_p_num=now_page*pge_con;
    if(db.length<10) {
        tb_p_num = db.length
    }
        var d;
    for (d=0;d<tb_p_num;d++){

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

document.getElementById('right_sp').click(function () {
    alert('hi')
})
});

