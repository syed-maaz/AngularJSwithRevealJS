var RapeCases = angular.module('RapeCases', ['ngSanitize']);


RapeCases.controller('cases', function($scope, $rootScope, services, $sce) {

    $scope.totalMonth = 12;
    $scope.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    $scope.monthCases = function(monthNo) {
        month = $scope.months[monthNo];
        $scope.monthNo = parseInt(monthNo) + 1;

        services.cases(month.toLowerCase()).then(function(data) {
            $scope.casess = data.data;
        });
    };

    $scope.trustSrc = function(src) {
        return $sce.trustAsResourceUrl(src);
    };

});


RapeCases.directive('caseMonth', function() {
    return function(scope, element, attrs) {
        scope.monthCases(attrs.caseMonth);
    };
});

