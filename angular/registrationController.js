(function(){

    var app=angular.module("registration",[]);
    
    var regcrl= function($scope, $http, $log){
       $scope.SendData= function () {
 
var payload={
	'ownerName': $scope.Name, 
	'ownerCity': $scope.City, 
	'ownerMobile': $scope.Mobile, 
		"petData":[
				{
					"name":$scope.pet1Name,
					"type":$scope.pet1Type
				},
				{
					"name":$scope.pet2Name,
					"type":$scope.pet2Type
				}
				]
			};

        var req={
        method:"POST",
        url: "http://localhost:8090/addOwner",
        headers: {'Content-type':"application/json",
		},
        data:payload 
        }

        var onSuccess=function(response){
        $scope.result="OK";
        }
        var onError=function(reason){
               $scope.result="Error";
               }
        $http(req).then(onSuccess);
     
       }
    }
 
    app.controller("registrationcontroller", regcrl);
    
}())