$(document).ready(loadAllCustomers);

$(document).ready(function(){
    var customers = {};
    $('#btnSave').click(function(){
        customers.id = $('#id').val();
        customers.name = $('#name').val();
        customers.address = $('#address').val();
        var customerObj = JSON.stringify(customers);

        if(customers.id=='' && customers.name=='' && customers.address==''){
            alert('Please fill all the fields')
        }else{
            $.ajax({
                url: 'http://localhost:8080/api/v1/customers/'+customers.id,
                method: 'PUT',
                data: customerObj,
                contentType: 'application/json; charset=utf-8',
                success: function(){
                    alert('Customer Saved Sucsessfuly');
                },
                error: function(error){
                    alert(error);
                }
            })
        }
    })
})

$(document).ready(function(){
    var customers = {};
    $('#btnUpdate').click(function(){
        customers.id = $('#id').val();
        customers.name = $('#name').val();
        customers.address = $('#address').val();
        var customerObj = JSON.stringify(customers);

        if(customers.id=='' && customers.name=='' && customers.address==''){
            alert('Please fill all the fields')
        }else{
            $.ajax({
                url: 'http://localhost:8080/api/v1/customers/'+customers.id,
                method: 'POST',
                data: customerObj,
                contentType: 'application/json; charset=utf-8',
                success: function(){
                    alert('Customer Updated Sucsessfuly');
                },
                error: function(error){
                    alert(error);
                }
            })
        }
    })
})

function loadAllCustomers(){

    var ajaxConfigCustomer = {
        method: "GET",
        url:"http://localhost:8080/api/v1/customers",
        async: true
    };

    $.ajax(ajaxConfigCustomer).done(function(response){
        response.forEach(function (customer){
            var html = "<tr>" +
                "<td>" + customer.id + "</td>" +
                "<td>" + customer.name + "</td>" +
                "<td>" + customer.address + "</td>" +
                '<td class="recycle"><i class="fa fa-2x fa-trash"></i></td>' +
                "</tr>";

            $("#tblCustomers tbody").append(html);

            $(".recycle").off();
            $(".recycle").click(function(){

                var customerID = ($(this).parents("tr").find("td:first-child").text());

                if (confirm("Are you sure that you want to delete?")){

                    $.ajax({
                        method:"DELETE",
                        url:"http://localhost:8080/api/v1/customers/"+customerID,
                        async: true
                    }).done(function(response){
                        alert("Customer has been successfully deleted");
                        $("#tblCustomers tbody tr").remove();
                        loadAllCustomers();
                    });

                }

            });
       });
    });

}