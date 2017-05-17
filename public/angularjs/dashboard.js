
var dashboard = angular.module('dashboardapp',['nvd3']);
dashboard.controller('dashboard', function($scope, $http) {

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


    $scope.postNode = function (id, name, cluster, services) {
        console.log("called");
        $http({
            method: 'post',
            url: '/postNode',
            data: {
                "id": id,
                "name": name,
                "cluster": cluster,
                "services": services
            }
        }).success(function (data) {
            console.log(data);

        })
    };

    $scope.postCluster = function (id, name, nodes, services) {
        console.log(id, name, nodes, services);
        $http({
            method: 'post',
            url: '/postCluster',
            data: {
                "id": id,
                "name": name,
                "nodes": nodes,
                "services": services
            }
        }).success(function (data) {
            console.log(data);

        })
    };

    $scope.postService = function (id, name, cluster, node) {
        console.log("called");
        $http({
            method: 'post',
            url: '/postService',
            data: {
                "id": id,
                "name": name,
                "cluster": cluster,
                "node": node
            }
        }).success(function (data) {
            console.log(data);

        })
    };

    $scope.topTenProperties = function () {


        Highcharts.chart('container', {

                title: {
                    text: 'Top 10 Services with usage'
                },

                xAxis: {
                    title: {
                        text: 'Services'
                    },
                    //categories: ["33 South", "101 San Fernando", "Pascio Plaza", "355 Serrano Drive", "Casa Baloni", "The Weekend", "Holiday Inn", "Radisson Blu", "Legacy Fountain"]
                    categories: ["Printing", "Lab Access", "Library", "PC Access", "Projector Access", "IEEE Subscription", "International Student Service", "Practical Service", "Dining Service", "Learning Material Service"]
                },

                series: [{
                    type: 'column',
                    colorByPoint: true,
                    data: [48, 24, 63, 20, 52, 76, 13, 62, 45, 32],
                    showInLegend: false
                }]

            }
        );


    };


    $scope.cityRevenue = function () {


        console.log("Getting top ten cities");
        


        Highcharts.chart('container1', {

                title: {
                    text: 'Top 10 nodes with their services'
                },

                xAxis: {
                    title: {
                        text: 'Nodes'
                    },
                    categories: ["Node Lib41", "Node Lab126", "Node Lib12", "Node CMPE32", "Node EE82", "Node SU8", "Node SE55", "Node CS39", "Node Lib81", "Node SE69"]
                    //, result[1]._id , result[2]._id, result[3]._id, result[4]._id, result[5]._id, result[6]._id, result[7]._id, result[8]._id, result[9]._id
                },

                series: [{
                    type: 'column',
                    colorByPoint: true,
                    data: [22,
                        67,
                        18,
                        85,
                        83,
                        94,
                        52,
                        31,
                        93,
                        58],
                    showInLegend: false
                    // , result[1].revenue , result[2].revenue,result[3].revenue  , result[4].revenue, result[5].revenue, result[6].revenue, result[7].revenue, result[8].revenue, result[9].revenue
                }]

            }
        );


    };


    $scope.topTenHost = function () {


        Highcharts.chart('container2', {

            title: {
                text: 'Cluster Activity'
            },

            xAxis: {
                title: {
                    text: 'Clusters'
                },
                categories: ["Library", "Software Engineering", "Aerospace Engineering", "Nuclear Engineering,", "Student Union"]
                //categories: ["Adrian Brady", "Juan Pinzon", "Rakesh Shah", "Xiaoyu Zhou", "Chris Pratt", "Juliann Moore", "Steve Austin", "Salmaan Pelhari", "Stacy Roberts"]
            },

            series: [{
                type: 'column',
                colorByPoint: true,
                data: [15,
                    7,
                    40,
                    71,
                    92],
                //  data: [2334, 5434, 2123, 1232, 10394, 3942, 5678, 11234, 4530],
                showInLegend: false
            }]

        });


    }
});

