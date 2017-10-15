
$(document).ready(function() {
    $('#Price_list_tb').DataTable( {
        "pagingType": "full_numbers"
    } );
    $('#price_list_tb').on('load',function (e) {
        e.preventDefault();
        $(this).ajaxForm(function () {
            
        })

    })

} );