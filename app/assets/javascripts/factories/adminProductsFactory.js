app.factory('adminProductsFactory', ['$http', function($http){

	function adminProductsFactory(){
		this.getProducts = function(callback){
			$http.get('/admin_products').success(function(results){
				callback(results)
			})
		}	
	}
	return new adminProductsFactory()
}])