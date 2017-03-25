angular.module("BodyModule").factory("BodyFactory", function($http,$q){

	var factory={};

		factory.getdata=function()
		{
		var deffered = $q.defer();
		$http({
			method:'GET',
			url:'../guitardata.json'
		}).success(function(response){deffered.resolve(response)})
			.error(function(error){deffered.reject(error)})

			return deffered.promise
	}

	return factory;
});