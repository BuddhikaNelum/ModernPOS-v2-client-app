var ajaxConfigCustomer = {
    method:"GET",
    url:"http://localhost:8080/api/v1/customers?action=count",
    async:true
};

$.ajax(ajaxConfigCustomer).done(function(response){
    $("#lblCustomersCount").text(response);
});

var ajaxConfigItems = {
    method:"GET",
    url:"http://localhost:8080/api/v1/items?action=count",
    async:true
};

$.ajax(ajaxConfigItems).done(function(response){
    $("#lblItemsCount").text(response);
});