app.controller('adminProductsController', ['categoriesFactory','$mdDialog','$scope', '$routeParams', 'adminProductsFactory', '$location','$cookies', function(categoriesFactory,$mdDialog, $scope, $routeParams, adminProductsFactory, $location, $cookies){
	$scope.products = [];
	$scope.addNewProduct = function(ev){
		$mdDialog.show({
			controller: addNewProductController, 
			templateUrl: '/partials/add_new_product.html',
			parent: angular.element(document.body),
      		targetEvent: ev,
      		clickOutsideToClose:true,
      		fullscreen: false
			})
	}
	function addNewProductController($scope, $mdDialog){
		$scope.categories = [];
		$scope.getCategories = function(){
			categoriesFactory.getCategories(function(results){
				$scope.categories = results
			})
		}
	    $scope.hide = function() {
	    	$mdDialog.hide();
	    };
	    $scope.cancel = function() {
	    	$mdDialog.cancel();
	    };
	    $scope.newProduct = function(){
	    	adminProductsFactory.addProduct($scope.newProduct,function(results){
	    		$scope.$parent.$$childHead.products = results
	    		$mdDialog.hide();
	    	})
	    };
	    $scope.getCategories();
	}
	$scope.getProducts = function(){
		adminProductsFactory.getProducts(function(results){
			$scope.products = results;
		})
	}
	$scope.getProducts()
}])