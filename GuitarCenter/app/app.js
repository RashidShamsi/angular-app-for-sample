var gcapp = angular.module('guitarcenter',[

	'ui.router',
	'CarouselModule',
	"ngRoute",
	"HeaderModule",
	"BodyModule",
	"biModule"	
	]);

gcapp.config(function($stateProvider){
	$stateProvider
	.state('/products', {
		url:'/products',
		templateUrl:'Carousel/CarouselPartial.html'
	})
		.state('/confirmation', {
		url:'/confirmation',
		templateUrl:'buyitem/confirmation.html'
	})
	.state('/bipartial', {
		url:'/buyitem',
		templateUrl:'buyitem/bipartial.html'
	});

	});
