
$(document).ready(function() {
var data_list;
var pge_con
var now_page;
var tb_p_num;
var total
    var td_clk=0;
    var col1
    var page_counter=1
now_page=0
    pge_con=1
    var first_pg=10;
    var row_index;
    var col_index
    var table = document.getElementById('body_list');
    $('body').persiaNumber();
    $('#modal1').modal();

    $(".sub_log").click(function () {
        $('#user_frm').ajaxSubmit({

            dataType: 'json',
            success: processJson
        });

        function processJson(data) {
            console.log(data)
            if (data[0].message=="true"){
                data_list=data
                var dat_len=data.length;



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

        }
    });


function remove_td() {
    var table_td = document.getElementById('body_list');
    table_td.innerHTML=""
}

function set_table_row() {
console.log(data_list.length)
        var db=data_list;
        var d;
    for (d=data_list.length-1;d>=1;d--){

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

    }
}
$('#body_list').on('click','td',function (e) {
    row_index = $(this).closest("tr").index();
    col_index = $(this).index();
row_index=row_index+1
    row_index=now_page+row_index
    console.log()
    console.log()
    td_clk=td_clk+1
    if (td_clk==1){
        e.target.innerHTML+='<form class="frm_e_block"><input type="text"></form>'
    }



    console.log(row_index)

})


   $('#body_list').on('keypress','input',function (event) {
        if ( event.which == 13 ) {
            event.preventDefault();
td_clk=0
var txt=$(this).val()

                var formData = {
                    'text': $(this).val(),
                    'id': row_index ,
                    'col': col_index
                };
                $.ajax({
                    type: 'POST',
                    url: 'inc/update.php',
                    data: formData,
                    dataType: 'json',
                    encode: true
                }).done(function (data) {

                    if (data.success) {
console.log('ok')

                    } else {

                       event.target.parentNode.parentNode.setAttribute('class','td_edit')
                        event.target.parentNode.parentNode.innerHTML=txt
                    }

            });
        }
    });


});


