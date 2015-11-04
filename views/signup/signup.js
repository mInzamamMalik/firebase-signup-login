/**
 * Created by medisoft-user on 11/4/2015.
 */
angular.module("myapp")

    .controller("signupController", function ($scope, $firebaseArray, dataSrevice) {

        $scope.signupData = {};


        // create a synchronized array
        $scope.userList = $firebaseArray(dataSrevice.userList);

        $scope.doSignup = function () {

            $scope.userAlreadyExist = false;

            for (var i = 0; i < $scope.userList.length; i++) {

                if ($scope.userList[i].username == $scope.signupData.username) {
                    $scope.userAlreadyExist = true;
                }
            }
            if ($scope.userAlreadyExist === false) {
                $scope.userList.$add($scope.signupData);
            } else {

                console.log("user already exist");
            }
        }


    });
