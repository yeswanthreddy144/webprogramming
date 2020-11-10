app.controller('myCtrl', function($scope, $interval) {
    $scope.hour=24;
    $scope.minu=60;
    $scope.sec=60;
    
     $scope.userData1 = {};
     sessionStorage.setItem("login",false);
    $scope.loginVal=sessionStorage.getItem("login");
    if(sessionStorage.getItem("userId")!=null)
            {
                $scope.userData1=JSON.parse(sessionStorage.getItem("userId"));
            }
       $interval(function () {
           if($scope.sec>0) $scope.sec--;
//           else if($scope.sec<=0) $scope.min--; $scope.sec=60;
//           else if($scope.min<=0) $scope.hour--; $scope.min=60; $scope.sec=60;
       },1000);
    
   $scope.goToProd=function(){
       window.location.href="products.html";
   };
    $scope.goToLogIn=function(){
        window.location.href="login.html";
    }; 
    
});
