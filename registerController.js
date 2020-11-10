var app = angular.module('myApp4', []);
app.controller('myCtrl4', function($scope) { 
     $scope.userData1 = {};
    if(sessionStorage.getItem("userId")!=null)
            {
                $scope.userData1=JSON.parse(sessionStorage.getItem("userId"));
            }
    $scope.userData=[];
    $scope.deliveryAddress=[];
    $scope.validate=function(){
        window.location.href="login.html";
    };
    $scope.loginVal=sessionStorage.getItem("login");
    $scope.details=function(){
            
            var nameCheck = /^[a-zA-Z]+$/;
            if(!$scope.firstName.match(nameCheck) || !$scope.middleName.match(nameCheck) || !$scope.lastName.match(nameCheck)){
                alert("Name must be in alphabets");
                return false;
            }
        
            var phoneCheck = /^\d{10}$/;
            if(!$scope.phoneNum.match(phoneCheck)){
                alert("Enter a 10 digit mobile number");
                $scope.phoneNum.focus();
                return false;   
            }
        
            if($scope.password.length<8){
                alert("Password must be of minimum 8 characters");
                return false;
            }
        
            if(!$scope.city.match(nameCheck)){
               alert("Enter a valid City");
               return false;
            }
            
            if(!$scope.state.match(nameCheck)){
                alert("Enter a valid State");
                return false;
            }
        
            if(!$scope.pincode.match(/^[0-9]+$/)){
                alert("Enter a valid Pincode");
                return false;
            }
            
            if(!$scope.country.match(nameCheck)){
                alert("Enter a valid country");
                return false;
            }
        
            if($scope.botCheck!=true){
                alert("BOT DETECTED!!!");
                return false;
            }
            
        if(sessionStorage.getItem("userData")!=null)
            {
                $scope.userData=JSON.parse(sessionStorage.getItem("userData"));
            }
        if(sessionStorage.getItem("deliveryAddress")!=null)
            {
                $scope.deliveryAddress=JSON.parse(sessionStorage.getItem("deliveryAddress"));
            }
        
        var ob={};
            ob.userId=$scope.userData.length;
            ob.firstName=$scope.firstName;
            ob.middleName=$scope.middleName;
            ob.lastName=$scope.lastName;
            ob.emailId=$scope.emailId;
            ob.phoneNum=$scope.phoneNum;
            ob.password=$scope.password;
            ob.streetAddress=$scope.streetAddress;
            ob.city=$scope.city;
            ob.state=$scope.state;
            ob.pincode=$scope.pincode;
            ob.country=$scope.country;
            
         var ob1={};
            ob1.userId=$scope.userData.length;
            ob1.firstName=$scope.firstName;
            ob1.lastName=$scope.lastName;
            ob1.streetAddress=$scope.streetAddress;
            ob1.city=$scope.city;
            ob1.state=$scope.state;
            ob1.pincode=$scope.pincode;
            ob1.country=$scope.country;
        
        $scope.userData.push(ob);
            var x=JSON.stringify($scope.userData);
            sessionStorage.setItem("userData",x);
           
        $scope.deliveryAddress.push(ob1);
            var y=JSON.stringify($scope.deliveryAddress);
            sessionStorage.setItem("deliveryAddress",y);
        
            $scope.firstName="";
            $scope.middleName="";
            $scope.lastName="";
            $scope.emailId="";
            $scope.phoneNum="";
            $scope.password="";
            $scope.streetAddress="";
            $scope.city="";
            $scope.state="";
            $scope.pincode="";
            $scope.country="";
            $scope.botCheck=false;
        
        alert("Registered Successfully");
            window.location.href="login.html";
            
    };
     $scope.goToLogIn=function(){
        window.location.href="login.html";
    };
    
});