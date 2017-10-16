
$(document).ready(function() {
    $('#modal1').modal();
    $(".sub_log").click(function () {
        $('form').ajaxSubmit({

            dataType: 'json',
            success: processJson
        });

        function processJson(data) {
            /*var i;
            for (i=0;i<data.length;i++){
                console.log(data[i].code_product);
            }*/
            if (data[0].message=="true"){
                document.getElementById('main_user_login').style.cssText='display:none';
                document.getElementById('ok_login').style.cssText='display:block';
                /*var frm_login = document.getElementById('frm_login');
                var main_page = document.getElementById('main_page');
                frm_login.className = frm_login.className.replace(/\b slideInLeft\b/, '');
                frm_login.className += ' slideOutRight';
                main_page.style.cssText = 'display:block';
                var table = document.getElementById('body_list');
                var i;
                for( i=1;i < data.length;i++){
                    var row = table.insertRow(0);
                    var col1 = row.insertCell(0);
                    var col2 = row.insertCell(1);
                    var col3 = row.insertCell(2);
                    var col4 = row.insertCell(3);
                    var col5 = row.insertCell(4);
                    col1.innerHTML = data[i].code_product;
                    col2.innerHTML = data[i].material;
                    col3.innerHTML = data[i].price_co;
                    col4.innerHTML = data[i].company;
                    col5.innerHTML = data[i].des;

                }*/
                function getdata() {
                    return data;
                }
                window.location.href("http://hirad-co.com/crm/main.html")


                }
            else{
                console.log("ohno mother fuck get out")
                document.getElementById('main_user_login').style.cssText='display:none';
                document.getElementById('no_login').style.cssText='display:block';
            }





        }


    })


});

