app.controller('adminProductsController', ['Upload','categoriesFactory','$mdDialog','$scope', '$routeParams', 'adminProductsFactory', '$location','$cookies', function(Upload,categoriesFactory,$mdDialog, $scope, $routeParams, adminProductsFactory, $location, $cookies){
	$scope.products = [];
	var controller_scope = $scope
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
	function addNewProductController($scope, $mdDialog, Upload){
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
	    $scope.upload = function(file){
	    	Upload.upload({
	    		url: '/admin_products/add',
        		method: 'POST',
        		data: $scope.newProduct,//it is the data that's need to be sent along with image
        		file: file,
        		fileFormDataName: 'product[main_img]',//myEntity is the name of the entity in which image is saved and image is the name of the attachment
        		formDataAppender: function(fd, key, val) {
	            	if (angular.isArray(val)) {
	                	angular.forEach(val, function(v) {
	                    	fd.append('product['+key+']', v);
	                });
	            	} else {
	                	fd.append('product['+key+']', val);
	            	}
        		}
	    	}).success(function(results){
	    		controller_scope.products = results
	    		$mdDialog.hide();
	    	})
	    };
	    $scope.newProductCreation = function(){
	    	$scope.newProduct.quant_sold = 0;
	    	$scope.upload($scope.newProduct.main_img)
	    };
	    $scope.getCategories();
	}
	$scope.getProducts = function(){
		adminProductsFactory.getProducts(function(results){
			$scope.products = results;
			console.log($scope.products)
		})
	}
	$scope.deleteProducts = function(id){
		adminProductsFactory.deleteProduct(id,function(results){
			$scope.products = results;
		})
	}
	$scope.getProducts()
}])