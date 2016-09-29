app.controller('productsController', ['$scope', '$routeParams', 'productsFactory', '$location','$cookies', function($scope, $routeParams, productsFactory, $location, $cookies){
	$scope.products;
	$scope.product;
	$scope.related;
	$scope.inventory = [];

	$scope.getProduct = function(){
		productsFactory.getProduct($routeParams.id, function(results){
			$scope.product = results;
			for(var i = 1; i <= $scope.product.inventory; i++){
				$scope.inventory.push(i);
			}
		})
	}

	$scope.getRelated = function(){
		productsFactory.getRelated($scope.product.category.id, function(results){
			$scope.related = results;
		})
	}

	$scope.addToCart = function(){
		$cookies.putObject()
	}


//Must remain in this order
	$scope.getProduct();
	$scope.getRelated();

}])