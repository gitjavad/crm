
$(document).ready(function() {
    $('#Price_list_tb').DataTable( {
        "pagingType": "full_numbers"
    } );
    $('#jsonForm').ajaxForm({

        dataType:  'json',
        success:   processJson
    });
    function processJson(data) {

        alert(data.message);
    }
} );
