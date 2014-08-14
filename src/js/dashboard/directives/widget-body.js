angular
	.module('Dashboard')
	.directive('rdWidgetBody', rdWidgetBody);

function rdWidgetBody () {
	var directive = {
        requires: '^rdWidget',
        scope: {
            loading: '@?'
        },
		transclude: true,
        templateUrl : 'partials/directives/widget-body.html',
        restrict: 'E'
    };
    return directive;
};
