/**
 * Created by medisoft-user on 11/4/2015.
 */
angular.module("myapp")

.controller("loginController",function($scope){

        $scope.name ="abc";

        // create a synchronized array
        $scope.data = $firebaseArray(ref);

        $scope.submit = function(){

            $scope.data.$add($scope.message);

        }
});