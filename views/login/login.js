/**
 * Created by medisoft-user on 11/4/2015.
 */
angular.module("myapp")

    .controller("loginController", function ($scope, $firebaseArray) {

        $scope.name ="abc";
        var ref = new Firebase("https://malikasinger-practiceapp.firebaseio.com/users");

        // create a synchronized array
        $scope.userList = $firebaseArray(ref);

        $scope.dologin = function () {
            $scope.data.$add($scope.message);

        }
});