    /*for OPTUS Australia - by: Alireza Dezfoolian */

    "use strict";

    //all directives
    var optusApp = angular.module("optus", [])

    .directive("lightbox", function lightbox() {
        return {
            restrict: "E",
            templateUrl: "template/lightbox.html",
            controller: "lightbox"
        };
    })

    .directive("bar", function bar() {
        return {
            restrict: "E",
            templateUrl: "template/bar.html",
            scope: {
                per: '@'
            }
        };
    })

    .directive("dropdown", function dropdown() {
        return {
            restrict: "E",
            templateUrl: "template/dropdown.html",
            controller: "dropdown"
        };
    })

    .directive("loading", function dropdown() {
        return {
            restrict: "E",
            templateUrl: "template/loading.html"
        };
    })

    .directive("btn", function btn() {
        return {
            restrict: "E",
            templateUrl: "template/btn.html",
            scope: {
                num: '='
            }
        };
    })

    //all controllers
    .controller("main", function dropdown($scope, $http, $rootScope) {
        var endPoint = 'http://pb-api.herokuapp.com/bars',
            data;
        $http.get(endPoint)
            .then(function(res) {
                data = res.data;
                $scope.loadingData = data;
                $rootScope.bars = data.bars;
                $rootScope.buttons = data.buttons;
                $rootScope.limit = data.limit;
                $rootScope.$broadcast('data_fetched');
                $rootScope.ready = true;
            });
        $scope.title = "Progress Bar Demo";
    })

    .controller("lightbox", function lightbox($scope, $rootScope) {
        $scope.barChanger = function(num) {
            var bar = $rootScope.bars[$rootScope.selectedBar - 1] += num;
            if (bar < 0) $rootScope.bars[$rootScope.selectedBar - 1] = 0;
        }
    })

    .controller("dropdown", function dropdown($scope, $rootScope) {
        $scope.dropdowns = [];
        $scope.$on('data_fetched', function() {
            angular.forEach($rootScope.bars, function(v, i) {
                $scope.dropdowns.push({ 'id': i + 1, 'label': '#progress' + (i + 1) });
            });
            $rootScope.selectedBar = $scope.dropdownSelected = $scope.dropdowns[0].id;
            $scope.onchange = function(id) {
                $rootScope.selectedBar = id.id;
            }
        });

    })