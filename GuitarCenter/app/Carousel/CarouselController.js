angular.module('CarouselModule').controller('CarouselController', 
	function ($scope,CarouselFactory,$http,$location) {

  	$scope.$location = $location;
	$scope.myInterval = 2;
    $scope.noWrapSlides = false;
    $scope.currentIndex ={
    	slide:0
    };
  

var getdata=function(){

			CarouselFactory.getdata().then
			(
				function(response){
					$scope.slides=response.allProducts
					console.log($scope.slides);
				},
				function(error){}
			)
		}
		
		getdata();


		$('#GCcarousel').bind('slide.bs.carousel', function (e) {
	  var carouselData = $(this).data('bs.carousel');
  var currentIndex = carouselData.getItemIndex(carouselData.$element.find('.item.active'));
 	if(currentIndex != 6){
   $scope.$apply(function () {
            $scope.currentIndex.slide= currentIndex + 1;
        });}
  console.log($scope.currentIndex.slide);
});

$scope.BuyItem = function(){
  var currentItem = JSON.stringify($scope.slides[$scope.currentIndex.slide]);
  localStorage.setItem('currentGuitar',currentItem);	
}

	$scope.selectedItem = JSON.parse(localStorage.getItem('currentGuitar'));


});