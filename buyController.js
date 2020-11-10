var app = angular.module('myApp5', []);
app.controller('myCtrl5', function($scope) { 
    $scope.userData = {}; 
      $scope.userData1 = {};
    $scope.deliveryAddress=[];
    $scope.deliveryAddress1=[];
    $scope.deliveryDetails=[];
    $scope.loginVal=sessionStorage.getItem("login");
        if(sessionStorage.getItem("userId")!=null)
            {
                $scope.userData1=JSON.parse(sessionStorage.getItem("userId"));
            }
        
        if(sessionStorage.getItem("deliveryAddress")!=null)
            {
                $scope.deliveryAddress=JSON.parse(sessionStorage.getItem("deliveryAddress"));
            }
        var k=0;
        for(var j=0;j<$scope.deliveryAddress.length;j++){    
            if($scope.deliveryAddress[j].userId==$scope.userData1.userId){
                $scope.deliveryAddress1[k]=$scope.deliveryAddress[j];
                k++;
            }
        }
    $scope.myFormat1=function(input) {
      if(input.userId==0){
            return true;          
      }
    return false;
  };

    $scope.deliver=function(){
         var num1=event.target.id;
//        alert(num);
        var c=-1,num;
        for(var j=0;j<$scope.deliveryAddress.length;j++){
            if($scope.deliveryAddress[j].userId==$scope.userData1.userId){
                c++;
                if(c==num1) num=j;
            }
        }
        
        $scope.userData1.firstName=$scope.deliveryAddress[num].firstName;
        $scope.userData1.lastName=$scope.deliveryAddress[num].lastName;
        $scope.userData1.streetAddress=$scope.deliveryAddress[num].streetAddress;
        $scope.userData1.city=$scope.deliveryAddress[num].city;
        $scope.userData1.state=$scope.deliveryAddress[num].state;
        $scope.userData1.pincode=$scope.deliveryAddress[num].pincode;
        $scope.userData1.country=$scope.deliveryAddress[num].country;
    
        $scope.deliveryDetails.push($scope.userData1);
        
        var x=JSON.stringify($scope.deliveryDetails);
            sessionStorage.setItem("deliveryDetails",x);
//        alert("Product placed successfully");
        window.location.href="purchased.html";
     };
    
    $scope.newAddress=function(){
        
        var nameCheck = /^[a-zA-Z]+$/;
            if(!$scope.firstName.match(nameCheck) || !$scope.lastName.match(nameCheck)){
                alert("Name must be in alphabets");
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
        
        var ob={};
        ob.userId=$scope.userData1.userId;
        ob.firstName=$scope.firstName;
        ob.lastName=$scope.lastName;
        ob.streetAddress=$scope.streetAddress;
        ob.city=$scope.city;
        ob.state=$scope.state;
        ob.pincode=$scope.pincode;
        ob.country=$scope.country;
        $scope.deliveryAddress.push(ob);
        $scope.deliveryAddress1.push(ob);
        var y=JSON.stringify($scope.deliveryAddress);
            sessionStorage.setItem("deliveryAddress",y);
        
        $scope.firstName="";
        $scope.lastName="";
        $scope.streetAddress="";
        $scope.city="";
        $scope.state="";
        $scope.pincode="";
        $scope.country="";
         $scope.deliveryAddress=JSON.parse(sessionStorage.getItem("deliveryAddress"));
        
    };
    $scope.goToLogIn=function(){
        window.location.href="login.html";
    };
    
   
});