angular.module('Soshace', [])
	.controller('mainCtrl', function($scope, $http){
	
	
		$http.get('/getData').success(function(data){
			$scope.candidates = data;
		});	
		
		$scope.deleteUser = function(id){
			$http.delete('/deleteCandidate/' + id).success(function(data){
				console.log('Кандидат удален');
				$scope.candidates = data;
			});	
		};
		
		$scope.newCandidate = function(form){
			console.log(form);
			$http.post('/newCandidate', form).success(function(data){
				$scope.candidates = data;
			});
		}
	
				
		$scope.submitData = function(){
			alert('Данные получены');
		}
		
		$scope.adminLogin =function(admin){
			var login = admin.name;
			var password = admin.password; 
			//зашифровать пароли
			$http.post('/login', {"login":login, "password":password}).success(function(data){
				console.log(data);
				if(data === "ok"){
					$scope.adminLoggedIn = true;
				} else{
					$scope.adminLoggedIn = false;
				}
			});
		};
	});
