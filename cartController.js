var app = angular.module('myApp2', []);
app.controller('myCtrl2', function($scope) { 
    
     $scope.userData1 = {};
    if(sessionStorage.getItem("userId")!=null)
            {
                $scope.userData1=JSON.parse(sessionStorage.getItem("userId"));
            }
    $scope.loginVal=sessionStorage.getItem("login");
    $scope.cartArray1 = []; 
        if(sessionStorage.getItem("cartArray")!=null)
            {
                $scope.cartArray1=JSON.parse(sessionStorage.getItem("cartArray"));
            }
    
    app.filter('greatThan', function (input,quantity) {
    angular.forEach(input, function (item) {
 
                if (item.quantity > quantity) {
                    output.push(item)
                }
            });
});
    $scope.quantDec=function(quant,id){
        for(var i=0;i<$scope.cartArray1.length;i++){
                if($scope.cartArray1[i].id==id){
                    if(quant==1){
//                        $scope.cartArray1[i].splice(i,1);
                        delete $scope.cartArray1[i];
                    }
                    else{
                        $scope.cartArray1[i].quantity--;
                    }
                    break;
                }
        }
            var x=JSON.stringify($scope.cartArray1);
            sessionStorage.setItem("cartArray",x);
    };
    
    $scope.quantInc=function(quant,id){
         for(var i=0;i<$scope.cartArray1.length;i++){
                if($scope.cartArray1[i].id==id){
                    $scope.cartArray1[i].quantity++;
                    break;
                }
            }
            var x=JSON.stringify($scope.cartArray1);
            sessionStorage.setItem("cartArray",x);
    };
    
    $scope.getTotal = function(){
    var total = 0;
    for(var i = 0; i < $scope.cartArray1.length; i++){
        total += ($scope.cartArray1[i].price * $scope.cartArray1[i].quantity);
    }
    return total;
}
    $scope.goToProd = function(){
      window.location.href="products.html";  
    };
    
    $scope.goToLogIn = function(){
        window.location.href="login.html";
    };
     $scope.goToLogIn=function(){
        window.location.href="login.html";
    };
//$scope.dataShow = function() {
//            var str="";
//                  
//            for(var j=0;j<cartArray.length;j++)
//                {
//	               str=str+'<tr><td>'+cartArray[j].name+'</td>';
//	               str=str+'<td>'+cartArray[j].color+'</td>';
//                    str=str+'<td>'+cartArray[j].price+'</td>';
//                    str=str+'<td>'+cartArray[j].quantity+'</td></tr>';
//                }
//	                       
//            document.getElementById("details").innerHTML=str;
//       
     });