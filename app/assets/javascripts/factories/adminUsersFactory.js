app.factory('adminUsersFactory', ['$http', function($http){

    function adminUsersFactory(){
    	this.login = function(user, callback){
    		$http.post('/admin/login', user).success(function(results){
    			callback(results);
    		})
    	}
        console.log("LOLOLOLOLOLOLOLOLOLOL");
    }
    return new adminUsersFactory();
}]);
