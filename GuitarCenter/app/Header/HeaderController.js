angular.module("HeaderModule").controller("HeaderController",
	function($scope,HeaderService){
		$scope.navMenuItems=HeaderService.navMenu;
})