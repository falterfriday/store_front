app.controller('productsController', ['$scope', '$routeParams', 'productsFactory', '$location','$cookies', function($scope, $routeParams, productsFactory, $location, $cookies){
$scope.products = [];

	$scope.getProducts = function(){
		adminProductsFactory.getProducts(function(results){
			$scope.products = results;
		})
	}
	$scope.getProducts()
}])