app.factory('adminProductsFactory', ['$http', function($http){

	function adminProductsFactory(){
		this.getProducts  =  function(callback){
			$http.get('/adminproducts').success(function(results){
				callback(results)
			})
		}	
	}
	return new adminProductsFactory()
}])