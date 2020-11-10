var app = angular.module('myApp6', []);
app.controller('myCtrl6', function($scope) { 
    $scope.userData = {};
    $scope.deliveryAddress1=[];
    
    $scope.loginVal=sessionStorage.getItem("login");
    $scope.orderDet=false;
    $scope.userDet=false; 
    
    
    $scope.cartArray=[];
    if(sessionStorage.getItem("cartArray")!=null)
            {
                $scope.cartArray=JSON.parse(sessionStorage.getItem("cartArray"));
            }
    
    $scope.deliveryDetails=[];
    if(sessionStorage.getItem("deliveryDetails")!=null)
            {
                $scope.deliveryDetails=JSON.parse(sessionStorage.getItem("deliveryDetails"));
            }
    
    $scope.userData1 = {};    
    if(sessionStorage.getItem("userId")!=null)
            {
                $scope.userData1=JSON.parse(sessionStorage.getItem("userId"));
            }
    
    $scope.deliveryAddress=[];    
    if(sessionStorage.getItem("deliveryAddress")!=null)
            {
                $scope.deliveryAddress=JSON.parse(sessionStorage.getItem("deliveryAddress"));
            }
    
    $scope.orderDetails=function(){
        $scope.orderDet=!$scope.orderDet;
        $scope.userDet=false;
        $scope.locDet=false;
        
        $scope.getTotal = function(){
        var total = 0;
        for(var i = 0; i < $scope.cartArray.length; i++){
            total += ($scope.cartArray[i].price * $scope.cartArray[i].quantity);
        }
        return total;
        };      
        
    };
    $scope.userDetails=function(){
        $scope.userDet=!$scope.userDet;
        $scope.orderDet=false;
        $scope.locDet=false;
    };
    $scope.locDetails=function(){
        $scope.locDet=!$scope.locDet;
        $scope.orderDet=false;
        $scope.userDet=false;
    };
       $scope.goToLogIn=function(){
        window.location.href="login.html";
    };
   
});