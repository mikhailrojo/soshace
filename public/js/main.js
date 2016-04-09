angular.module('Soshace', [])
	.controller('mainCtrl', function($scope, $http){
	
		
	
		$http.get('/getData').success(function(data){
			$scope.candidates = data;
		});	
		
		$scope.deleteCandidate = function(id){
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
		
		$scope.editCandidate = function(person, form){
			$scope.redakciya = true;
			$scope.form = {name :person.name, place: person.place, time: person.time, _id: person._id};
			console.log($scope.form);
			$scope.hideSubmit = true;
		}
		
		$scope.editCandidate = function(form){
			console.log(form);
			$http.put('/editCandidate', form).success(function(data){
				$scope.candidates = data;
				console.log('отредактировано');
				$scope.redakciya = false;
				$scope.hideSubmit = false;
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
