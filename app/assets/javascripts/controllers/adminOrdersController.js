app.controller('adminOrdersController', ['$scope', '$routeParams', 'adminOrdersFactory', '$location','$cookies', function($scope, $routeParams, adminOrdersFactory, $location, $cookies){
	
	$scope.orders;
	$scope.order;
	$scope.productsOrder;

	if($cookies.getObject('user')){
		$scope.user = $cookies.getObject('user')
		if($scope.user.admin == false){
			$location.url('/');
		}
	}
	else{
		$location.url('/')
	}

	$scope.getOrders = function(){
		adminOrdersFactory.getOrders(function(results){
			$scope.orders = results;
		})
	}
	$scope.getOrder = function(){
		adminOrdersFactory.getOrder($routeParams.id, function(results){
			$scope.order = results.order;
			$scope.productsOrder = results.order.products;
		})
	}
	$scope.changeStatus = function(status,id){
		adminOrdersFactory.changeStatus(status,id, function(results){
			$scope.orders = results;
		})
	}

	$scope.getOrders();
	$scope.getOrder();

}])