$(document).ready(loadAllItems);

$(document).ready(function(){
    var items = {};
    $('#btnSave').click(function(){
        items.code = $('#itemCode').val();
        items.description = $('#description').val();
        items.unitPrice = $('#unitPrice').val();
        items.qty = $('#qty').val();

        var itemObj = JSON.stringify(items);

            $.ajax({
                url: 'http://localhost:8080/api/v1/items/'+items.code,
                method: 'PUT',
                data: itemObj,
                contentType: 'application/json; charset=utf-8',
                success: function(){
                    alert('Item Saved Sucsessfuly');
                },
                error: function(error){
                    alert(error);
                }
            })
    })
})

$(document).ready(function(){
    var items = {};
    $('btnUpdate').click(function(){
        items.code = $('#itemCode').val();
        items.description = $('#description').val();
        items.unitPrice = $('#unitPrice').val();
        items.qty = $('#qty').val();

        var itemObj = JSON.stringify(items);

        $.ajax({
            url: 'http://localhost:8080/api/v1/items/'+items.code,
            method: 'POST',
            data: itemObj,
            contentType: 'application/json; charset=utf-8',
            success:function(){
                alert('Item Updated');
            },
            error:(function(error){
                alert(error);
            })
        })
    })
})


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
                '<td class="recycle"><i class="fa fa-2x fa-trash"></i></td>' +
                "</tr>";

            $("#tblItems tbody").append(html);

            $(".recycle").off();
            $(".recycle").click(function(){

                var code = ($(this).parents("tr").find("td:first-child").text());

                if (confirm("Are you sure that you want to delete?")){

                    $.ajax({
                        method:"DELETE",
                        url:"http://localhost:8080/api/v1/items/"+code,
                        async: true
                    }).done(function(response){
                        alert("Item has been successfully deleted");
                        $("#tblItems tbody tr").remove();
                        loadAllItems();
                    });

                }

            });
        });
    });

}