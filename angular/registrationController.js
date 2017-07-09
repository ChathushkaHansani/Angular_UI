(function(){

    var app=angular.module("registration",[]);
    
    var regcrl= function($scope, $http){
       $scope.SendData= function () {
    /*    var data = {
            'ownerName': $scope.Name,
            'ownerCity': $scope.City,
            'ownerMobile': $scope.Mobile
        }*/

     /*   var data = {
            call1:
                function (value) {
                    return {'ownerName': $scope.Name, 'ownerCity': $scope.City, 'ownerMobile': $scope.Mobile, 'petData':[{'name':$scope.pet1Name, 'type':$scope.pet1Type},{'name':$scope.pet2Name, 'type':$scope.pet2Type}]};
                 }
        }*/
       // alert($scope.Name +  $scope.City + $scope.Mobile );


        /*var res = $http.post('http://localhost:8080/addOwner', data);*/

        $http({
            url: "http://localhost:8080/addOwner",
            method: "POST",
            params: {'ownerName': $scope.Name, 'ownerCity': $scope.City, 'ownerMobile': $scope.Mobile}
            })
     /*   res.success(function (data, status, headers, config) {
                 $scope.PostDataResponse = data;
        });
        res.error(function(data, status, headers, config) {
        			alert( "failure message: " + JSON.stringify({data: data}));
        		});*/
       }
    }
 
    app.controller("registrationcontroller", regcrl);
    
}())