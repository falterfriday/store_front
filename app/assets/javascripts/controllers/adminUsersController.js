app.controller('adminUsersController', ['adminUsersFactory', '$scope', '$cookies', '$routeParams', '$location', function(adminUsersFactory, $scope, $cookies, $routeParams, $location){
	$scope.login = function(){
		adminUsersFactory.login($scope.loginUser, function(results){
			$cookies.putObject('user') = results;
			$location.url('/admin/orders');
		})
	}
}]);
