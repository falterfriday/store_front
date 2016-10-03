app.factory('categoriesFactory', ['$http', function($http){

	function categoriesFactory(){
		this.getCategories  =  function(callback){
			$http.get('/categories').success(function(results){
				callback(results)
			})
		}	
	}
	return new categoriesFactory()
}])