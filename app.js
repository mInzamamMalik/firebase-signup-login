/**
 * Created by medisoft-user on 11/2/2015.
 */
var app = angular.module("myapp",['firebase','ui.router'])


.config(function($urlRouterProvider,$stateProvider){

    $urlRouterProvider.otherwise("/login");

    $stateProvider.state("login",{
        templateUrl : "views/login/login.html",
        url: "/login",
        controller : "loginController"

    });


});

