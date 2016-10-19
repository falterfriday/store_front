app.factory('adminProductsFactory', ['$http', function($http){

	function adminProductsFactory(){
		this.getProducts = function(callback){
			$http.get('/admin_products').success(function(results){
				callback(results)
			})
		}
		this.addProduct = function(product,callback){
			$http.post('/admin_products/add').success(function(results){
				callback(results)
			})
		}
		this.deleteProduct = function(id,callback){
			$http.get('/admin_products/delete/' + id).success(function(results){
				callback(results)
			})
		}	
	}
	return new adminProductsFactory()
}])