app.controller('categoriesController', ['$scope', 'categoriesFactory', '$routeParams', '$location', function($scope, categoriesFactory, $routeParams, $location){
	$scope.categories; 
	$scope.products;
	$scope.category;

	$scope.getCategories = function(){
		categoriesFactory.getCategories(function(results){
			$scope.categories = results;
			$scope.category = results[0];
			$scope.products = $scope.category.products;
		})
	}

	$scope.selectCategory = function(index){
		$scope.category  = $scope.categories[index];
		$scope.products = $scope.category.products;
	}

	// TODO
	// ##############
	// pagination
	// sort
	// search functionality
	// style


	$scope.getCategories();
}])