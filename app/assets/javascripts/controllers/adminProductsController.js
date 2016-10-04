app.controller('adminProductsController', ['$mdDialog','$scope', '$routeParams', 'adminProductsFactory', '$location','$cookies', function($mdDialog, $scope, $routeParams, adminProductsFactory, $location, $cookies){
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
		.then(function(answer) {
			$scope.status = 'You said the information was "' + answer + '".';
		}, function() {
	      	$scope.status = 'You cancelled the dialog.';
	    });
	}
	function addNewProductController($scope, $mdDialog) {
	    $scope.hide = function() {
	      $mdDialog.hide();
	    };

	    $scope.cancel = function() {
	      $mdDialog.cancel();
	    };

	    $scope.answer = function(answer) {
	      $mdDialog.hide(answer);
	    };
	}
	$scope.getProducts = function(){
		adminProductsFactory.getProducts(function(results){
			$scope.products = results;
		})
	}
	$scope.getProducts()
}])