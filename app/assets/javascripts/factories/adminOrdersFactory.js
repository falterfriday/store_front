app.factory('adminOrdersFactory', ['$http', function($http){

	function adminOrdersFactory(){

		this.getOrders  =  function(callback){
			$http.get('/orders').success(function(results){
				callback(results);
			})
		}
		this.getOrder = function(id, callback){
			$http.get(`/orders/${id}`).success(function(results){
				callback(results);
			})
		}
		this.changeStatus = function(status, id, callback){
			//may have to add column to purchases
			$http.post(`/orders/status/${id}/${status}`).success(function(results){
				callback(results)
			})
		}
	}
	return new adminOrdersFactory();
}])