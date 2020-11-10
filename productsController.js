app.controller('myCtrl1', function($scope,$location) {
//    $scope.myVar1=false;
//    $scope.myVar2=false;
//    $scope.myVar3=false;
//    $scope.myVar4=false;
    $scope.loginVal=sessionStorage.getItem("login");
     $scope.userData1 = {};
    if(sessionStorage.getItem("userId")!=null)
            {
                $scope.userData1=JSON.parse(sessionStorage.getItem("userId"));
            }
    
    $scope.arr=[ {type: "Trimmer", name: "Philips", color: "Black", price: 1299, img: "tr1.jpeg"},
                 {type: "Trimmer", name: "Flipkart SmartBuy", color: "Red", price: 1399, img: "tr2.jpeg"},
                 {type: "Trimmer", name: "Nova", color: "Blue", price: 1250, img: "tr3.jpeg"},
                 {type: "Trimmer", name: "Syska", color: "Blue", price: 1200, img: "tr4.jpeg"},
                 {type: "Trimmer", name: "Beardo", color: "Silver", price: 1350, img: "tr5.jpeg"},
                 {type: "Trimmer", name: "Kemei", color: "Black", price: 1250, img: "tr6.jpeg"},
                 {type: "Trimmer", name: "Panasonic", color: "White", price: 1150, img: "tr7.jpeg"},
                 {type: "Trimmer", name: "HTC", color: "Silver", price: 1299, img: "tr8.jpeg"},
                 {type: "Trimmer", name: "Youthfull", color: "Blue", price: 1300, img: "tr9.jpeg"},
                 {type: "SmartPhone", name: "Apple iPhone XS", color: "Black", price: 1299, img: "sm1.jpeg"},
                 {type: "SmartPhone", name: "Realme 3", color: "Red", price: 1399, img: "sm2.jpeg"},
                 {type: "SmartPhone", name: "Apple iPhone XR", color: "Blue", price: 1250, img: "sm3.jpeg"},
                 {type: "SmartPhone", name: "Redmi Note 7S", color: "Blue", price: 1200, img: "sm4.jpeg"},
                 {type: "SmartPhone", name: "Apple iPhone 8", color: "Silver", price: 1350, img: "sm5.jpeg"},
                 {type: "SmartPhone", name: "Vivo V15", color: "Black", price: 1250, img: "sm6.jpeg"},
                 {type: "SmartPhone", name: "Redmi 6", color: "White", price: 1150, img: "sm7.jpeg"},
                 {type: "SmartPhone", name: "Infinix Smart 3 Plus", color: "Silver", price: 1299, img: "sm8.jpeg"},
                 {type: "SmartPhone", name: "Honor 9I", color: "Blue", price: 1300, img: "sm9.jpeg"},
                 {type: "Denim Jeans", name: "U.S. Polo Assn.", color: "Black", price: 1299, img: "jn1.jpeg"},
                 {type: "Denim Jeans", name: "Metronaut", color: "Red", price: 1399, img: "jn2.jpeg"},
                 {type: "Denim Jeans", name: "Flying Machine", color: "Blue", price: 1250, img: "jn3.jpeg"},
                 {type: "Denim Jeans", name: "Lee", color: "Blue", price: 1200, img: "jn4.jpeg"},
                 {type: "Denim Jeans", name: "Urbano Fashion", color: "Silver", price: 1350, img: "jn5.jpeg"},
                 {type: "Denim Jeans", name: "Allen Solly Jeans", color: "Black", price: 1250, img: "jn6.jpeg"},
                 {type: "Denim Jeans", name: "Billion", color: "White", price: 1150, img: "jn7.jpeg"},
                 {type: "Denim Jeans", name: "Wrangler", color: "Silver", price: 1299, img: "jn8.jpeg"},
                 {type: "Denim Jeans", name: "Denizen", color: "Blue", price: 1300, img: "jn9.jpeg"},
                 {type: "Watch", name: "Casio", color: "Black", price: 1299, img: "wt1.jpeg"},
                 {type: "Watch", name: "Fogg", color: "Red", price: 1399, img: "wt2.jpeg"},
                 {type: "Watch", name: "Titan", color: "Blue", price: 1250, img: "wt3.jpeg"},
                 {type: "Watch", name: "Fastrack", color: "Blue", price: 1200, img: "wt4.jpeg"},
                 {type: "Watch", name: "Fossil", color: "Silver", price: 1350, img: "wt5.jpeg"},
                 {type: "Watch", name: "Lorem", color: "Black", price: 1250, img: "wt6.jpeg"},
                 {type: "Watch", name: "Adixion", color: "White", price: 1150, img: "wt7.jpeg"},
                 {type: "Watch", name: "Skmei", color: "Silver", price: 1299, img: "wt8.jpeg"},
                 {type: "Watch", name: "Daniel Klein", color: "Blue", price: 1300, img: "wt9.jpeg"}
    
    ];
    
     $scope.cartArray=[]; 
        if(sessionStorage.getItem("cartArray")!=null)
            {
                $scope.cartArray=JSON.parse(sessionStorage.getItem("cartArray"));
            }
//    $scope.slider = {
//    minValue: 10,
//    maxValue: 90,
//    options: {
//        floor: 0,
//        ceil: 100,
//        step: 1,
//        minRange: 10,
//        maxRange: 50
//    }
//};
    $scope.lower_price_bound = 0;
  $scope.upper_price_bound = 1400;
  
//  $scope.priceRange = function(item) {
//    return (parseInt(item['min-acceptable-price']) >= $scope.lower_price_bound && parseInt(item['max-acceptable-price']) <= $scope.upper_price_bound);
//  };
    
//    $scope.arr1=[{name: "Philips", color: "Black", price: 1299},
//                 {name: "Flipkart SmartBuy", color: "Red", price: 1399},
//                 {name: "Nova", color: "Blue", price: 1250},
//                 {name: "Syska", color: "Blue", price: 1200},
//                 {name: "Beardo", color: "Silver", price: 1350},
//                 {name: "Kemei", color: "Black", price: 1250},
//                 {name: "Panasonic", color: "White", price: 1150},
//                 {name: "HTC", color: "Silver", price: 1299},
//                 {name: "Youthfull", color: "Blue", price: 1300}
//                ];
//    $scope.arr2=[{name: "Apple iPhone XS", color: "Black", price: 1299},
//                 {name: "Realme 3", color: "Red", price: 1399},
//                 {name: "Apple iPhone XR", color: "Blue", price: 1250},
//                 {name: "Redmi Note 7S", color: "Blue", price: 1200},
//                 {name: "Apple iPhone 8", color: "Silver", price: 1350},
//                 {name: "Vivo V15", color: "Black", price: 1250},
//                 {name: "Redmi 6", color: "White", price: 1150},
//                 {name: "Infinix Smart 3 Plus", color: "Silver", price: 1299},
//                 {name: "Honor 9I", color: "Blue", price: 1300}
//                ];
//    $scope.arr3=[{name: "U.S. Polo Assn.", color: "Black", price: 1299},
//                 {name: "Metronaut", color: "Red", price: 1399},
//                 {name: "Flying Machine", color: "Blue", price: 1250},
//                 {name: "Lee", color: "Blue", price: 1200},
//                 {name: "Urbano Fashion", color: "Silver", price: 1350},
//                 {name: "Allen Solly Jeans", color: "Black", price: 1250},
//                 {name: "Billion", color: "White", price: 1150},
//                 {name: "Wrangler", color: "Silver", price: 1299},
//                 {name: "Denizen", color: "Blue", price: 1300}
//                ];
//    $scope.arr4=[{name: "Casio", color: "Black", price: 1299},
//                 {name: "Fogg", color: "Red", price: 1399},
//                 {name: "Titan", color: "Blue", price: 1250},
//                 {name: "Fastrack", color: "Blue", price: 1200},
//                 {name: "Fossil", color: "Silver", price: 1350},
//                 {name: "Lorem", color: "Black", price: 1250},
//                 {name: "Adixion", color: "White", price: 1150},
//                 {name: "Skmei", color: "Silver", price: 1299},
//                 {name: "Daniel Klein", color: "Blue", price: 1300}
//                ];
   

//    for(var i=0;i<arr1.length;i++){
//        $scope.name[i]=arr1[i].name;
//    }
//    
//    
//    
//    $scope.change1 = function() {
//        $scope.myVar2=$scope.myVar3=$scope.myVar4=false;
//        $scope.myVar1=!$scope.myVar1;
//    };
//    $scope.change2 = function() {
//        $scope.myVar1=$scope.myVar3=$scope.myVar4=false;
//        $scope.myVar2=!$scope.myVar2;
//    };
//    $scope.change3 = function() {
//        $scope.myVar1=$scope.myVar2=$scope.myVar4=false;
//        $scope.myVar3=!$scope.myVar3;
//    };
//    $scope.change4 = function() {
//        $scope.myVar2=$scope.myVar3=$scope.myVar1=false;
//        $scope.myVar4=!$scope.myVar4;
//    };
    $scope.addToCart = function(){
        var num=event.target.id;
        var quantity =1;
        var flag=null;
        var index=i;
        for(var i=0;i<$scope.cartArray.length;i++){
               if($scope.cartArray[i].type==$scope.arr[num].type && $scope.cartArray[i].name==$scope.arr[num].name){
                   index=i;
                   flag=1;
               }
           }
        if(flag==1) $scope.cartArray[index].quantity=parseInt($scope.cartArray[index].quantity)+parseInt(quantity);
        else if(flag!=1){
            var ob={};
            ob.id=num;
            ob.type=$scope.arr[num].type;
            ob.name=$scope.arr[num].name;
            ob.color=$scope.arr[num].color;
            ob.price=$scope.arr[num].price;
            ob.quantity=quantity;    
             
        $scope.cartArray.push(ob);
        }
            var x=JSON.stringify($scope.cartArray,function( key, value ) {
    if( key === "$$hashKey" ) {
        return undefined;
    }

    return value;
});
            sessionStorage.setItem("cartArray",x);
    }
        $scope.filterSearch = function(){
            $scope.searchValue
            $scope.searchValue="";   
        
        }
     $scope.goToLogIn=function(){
        window.location.href="login.html";
    };
    
});
