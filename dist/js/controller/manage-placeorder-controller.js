$(document).ready(loadAllItems);

function loadAllItems(){
    var ajaxConfigItem = {
        method: "GET",
        url:"http://localhost:8080/api/v1/items",
        async: true
    };

    $.ajax(ajaxConfigItem).done(function(response){
        response.forEach(function (item){
            var html = "<tr>" +
                "<td>" + item.code + "</td>" +
                "<td>" + item.description + "</td>" +
                "<td>" + item.unitPrice + "</td>" +
                "<td>" + item.qty + "</td>" +
                "<td>" + "<input type='text' id='qty'/> " + "</td>" +
                "<td>" + "<input type='button' id='btnAddtoCart' class='btn btn-success' value='Add to Cart' " + "</td>" +
                "</tr>";

            $("#tblPlaceOrders tbody").append(html);
        });
    });

}

$(document).ready(function () {
    var orders = {};

    $('btnAddtoCart').click(function () {
        orders.qty = $('#qty').val();

        var ordersObj = JSON.stringify(orders);

        console.log(ordersObj);
    })

})