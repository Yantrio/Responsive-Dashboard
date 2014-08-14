angular
	.module('Dashboard')
	.directive('rdWidgetTitle', rdWidgetTitle);

function rdWidgetTitle () {
	var directive = {
        requires: '^rdWidget',
        scope: {
            title: '@',
            icon: '@'
        },
				transclude: true,
				templateUrl: 'partials/directives/widget-title.html',
        restrict: 'E'
    };
    return directive;
};
