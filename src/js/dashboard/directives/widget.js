angular
	.module('Dashboard')
	.directive('rdWidget', rdWidget);

function rdWidget () {
	var directive = {
        templateUrl:'partials/directives/widget.html',
        restrict: 'E',
				scope: {
						title: '@',
						icon: '@'
				},
    };
    return directive;

    function link(scope, element, attrs) {
      /* */
    }
};
