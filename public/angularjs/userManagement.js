
var userManagement = angular.module('userManagementapp',[]);



userManagement.controller('userManagement', function ($scope, $http) {


    $scope.getNodes = function(){
        $http({
            method:'get',
            url:'/getNodes'
        }).success(function(data){
            console.log("Getting all the users " + data);
            $scope.nodes=data;
            console.log($scope.nodes);
        })
    };
    $scope.getServices = function(){
        $http({
            method:'get',
            url:'/getServices'
        }).success(function(data){
            console.log("Getting all the users " + data);
            $scope.services=data;
            console.log($scope.services);
        })
    };
    $scope.getClusters = function(){
        $http({
            method:'get',
            url:'/getClusters'
        }).success(function(data){
            console.log("Getting all the users " + data);
            $scope.clusters=data;
            console.log($scope.clusters);
        })
    };

    $scope.getAllUsers = function(){
        console.log("This gets called");
        $http({
            method:'get',
            url:'/getAllUsers'
        }).success(function(data){
            console.log("Getting all the users " + data);
            $scope.user=data;
        })
    };

        $scope.sortName = 'firstName';
        $scope.sortReverse = false;


    $scope.getUser = function(id){
        console.log("getUser gets called "+id);
        $http({
            method:'post',
            url:'/getUser',
            data:{
                "_id":id
            }
        }).success(function(data){
            console.log(data);
            $scope.a=data;
        })
    };


    });