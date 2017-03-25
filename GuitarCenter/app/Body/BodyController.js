angular.module("BodyModule").controller("BodyController",
	function($scope,BodyFactory,$http){

	

		var getdata=function(){

			BodyFactory.getdata().then
			(
				function(response){
					$scope.guitarinfo=response.allProducts
					console.log($scope.guitarinfo);
				},
				function(error){}
			)
		}
		
		getdata();
	});