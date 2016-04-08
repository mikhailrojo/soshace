angular.module('Soshace', [])
	.controller('mainCtrl', function($scope, $http){
	
	
		$http.get('/getData').success(function(data){
			$scope.candidates = data;
		});	
	
				
		$scope.submitData = function(){
			alert('Данные получены');
		}
		
		$scope.adminLogin =function(admin){
			var password = admin.password; 
			$http.get('/login/:password').success(function(data){
				console.log(data);
			});
		};
	});
