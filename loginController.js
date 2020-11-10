var app = angular.module('myApp3', []);
app.controller('myCtrl3', function($scope) { 
    $scope.userData = []; 
    $scope.data=[];  
    $scope.details=function(){
        window.location.href="register.html";
    };
    $scope.validate=function(){
        
        if($scope.password.length<8){
            alert("Password must be of minimum 8 characters");
            return false;
        }
        if($scope.botCheck!=true){
            return false;
        }
        
        if(sessionStorage.getItem("userData")!=null)
            {
                $scope.userData=JSON.parse(sessionStorage.getItem("userData"));
            }
        for(var i=0;i<$scope.userData.length;i++){
            if($scope.userData[i].emailId==$scope.emailId && $scope.userData[i].password==$scope.password){
//                $scope.data.push($scope.userData[i]);
                var x=JSON.stringify($scope.userData[i]);
                sessionStorage.setItem("userId",x);
                sessionStorage.setItem("login",true);
                alert("Login successful!");
                window.location.href="buy.html";
            }
        }
    };
});