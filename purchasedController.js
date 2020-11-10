var app = angular.module('myApp6', []);
app.controller('myCtrl6', function($scope) { 
$scope.loginVal=sessionStorage.getItem("login");
     $scope.userData1 = {};
    if(sessionStorage.getItem("userId")!=null)
            {
                $scope.userData1=JSON.parse(sessionStorage.getItem("userId"));
            }
    $scope.deliveryDetails=[];
    $scope.len=$scope.deliveryDetails.length;
        if(sessionStorage.getItem("deliveryDetails")!=null)
            {
                $scope.deliveryDetails=JSON.parse(sessionStorage.getItem("deliveryDetails"));
            }
         $scope.cartArray=[];
        if(sessionStorage.getItem("cartArray")!=null)
            {
                $scope.cartArray=JSON.parse(sessionStorage.getItem("cartArray"));
            }
    $scope.getTotal = function(){
    var total = 0;
    for(var i = 0; i < $scope.cartArray.length; i++){
        total += ($scope.cartArray[i].price * $scope.cartArray[i].quantity);
    }
    return total;
};
    $scope.goToProd=function(){
        window.location.href="products.html";
    };
    $scope.goToPay=function(){
        window.location.href="payment.html";
    };
    $scope.goToLogIn=function(){
        window.location.href="login.html";
    };
});