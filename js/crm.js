
$(document).ready(function() {
var data_list;
var pge_con
var now_page;
var tb_p_num;
var total
    var col1
now_page=1
    pge_con=10
    var first_pg=0;
    var table = document.getElementById('body_list');
    $('#right_sp').click(function () {
       next_page();

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
        now_page=1
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
        $('body').persiaNumber();
        remove_td()
        now_page=now_page+1
        pge_con=now_page*10
        first_pg=first_pg+10
pagenav()
set_table_row()
    }
    function prev_page() {

    }
    /*function disable() {
        var left_arr= document.getElementById('left_sp')
        if (now_page=1){

            left_arr.className=left_arr.className.replace(/\b activelb\b/, '');
left_arr.className+=' disabl'
        }else {
            left_arr.className=left_arr.className.replace(/\b disabl\b/, '');
left_arr.className+=' activelb'
        }
    }*/
function pagenav() {
    total=data_list.length
    total=total/10;
    total=Math.ceil(total)
    var in_num=document.getElementById('input_num');
    in_num.innerHTML=now_page+" از "+total

}
function remove_td() {
    var table_td = document.getElementById('body_list');
    table_td.innerHTML=""
}

function set_table_row() {

        var db=data_list;
   /* var right_arr=document.getElementById('right_sp')
    if (now_page>total){
        right_arr.className=right_arr.className.replace(/\b activelb\b/, '')
        right_arr.className+=' disabl'
    }
    else {
        right_arr.className=right_arr.className.replace(/\b disabl\b/, '');
    right_arr.className+=' activelb'
    }
    disable();*/



    if(db.length<10) {
        tb_p_num = db.length
    }
        var d;
    console.log(pge_con)
    for (d=first_pg;d<pge_con;d++){

        var row = table.insertRow(0);
         col1 = row.insertCell(0);
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
col1.innerHTML+='<form id="frm_edit"><input type="text"></input></form>'



    }
}
$('#body_list').on('click','td',function () {
    var row_index = $(this).closest("tr").index();
    var col_index = $(this).index();
    console.log(row_index)
})

});


