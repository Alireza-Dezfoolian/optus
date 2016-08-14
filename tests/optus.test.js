//Unit testing by: Alireza Dezfoolian
describe('optus App', function() {

    beforeEach(angular.mock.module('optus'));

    var $controller;

    beforeEach(angular.mock.inject(function(_$controller_) {
        $controller = _$controller_;
    }));


    describe('main Controller', function() {
        it('should be Progress Bar Demo for title', function() {
            var $scope = {},
                $rootScope = {};
            var controller = $controller('main', { $scope: $scope, $rootScope: $rootScope });
            expect($scope.title).toBe('Progress Bar Demo');
        });
    });

    describe('lightbox Controller', function() {
        it('should have $scope.barChanger function', function() {
            var $scope = {},
                $rootScope = {};
            var controller = $controller('lightbox', { $scope: $scope, $rootScope: $rootScope });
            expect($scope.barChanger).toBeDefined();
        });
    });

    describe('dropdown Controller', function() {
        it('should have dropdown', function() {
            var $scope = {},
                $rootScope = {};
            var controller = $controller('dropdown', { $scope: $scope, $rootScope: $rootScope });
            expect($scope.dropdowns).toBeDefined();
            expect($rootScope.selectedBar).toBeDefined();
        });
    });

});