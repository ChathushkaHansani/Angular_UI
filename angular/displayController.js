(function() {
    var app=angular.module("view",[]);

    var displaycrl=function($http, $scope, $log){

    $log.info('chathu');
       // var url="http://localhost:8090/viewOwner";

        $scope.getOwner=function() {
         $log.info('hansani');
            $http({
                method:'GET',
                url:'http://localhost:8090/viewOwner'

            }).then(function(response){
             $log.info('chathuhansa');
                $scope.owner=response;
            })

          /*   $http.get("http://localhost:8090/viewOwner").then(function(response){
               $scope.owner=response;
            })*/
        }

        /*var displayOwner=function(){

        }*/


    }
     app.controller("displayController", displaycrl);


}())