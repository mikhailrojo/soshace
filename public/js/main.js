angular.module('Soshace', ['ngAnimate'])
	.controller('mainCtrl', function($scope, $http){
	
		
	
		$http.get('/getData').success(function(data){
			$scope.candidates = data.data;
			if(data.auth === "nikita"){
				$scope.adminLoggedIn = true;
				setTimeout(hide, 2000);
			}			
		});	
		
		$scope.deleteCandidate = function(id){
			$http.delete('/deleteCandidate/' + id).success(function(data){
				$scope.candidates = data;
			});	
		}
		
		$scope.newCandidate = function(form){
			console.log(form);
			$http.post('/newCandidate', form).success(function(data){
				$scope.candidates = data;
			});
		}
		
		$scope.cancelIditing= function(){
			$scope.redakciya = false;
			$scope.form = {};
			$scope.hideSubmit = false;
		}
		
		$scope.editCandidateInForm = function(person){
			$scope.redakciya = true;
			$scope.form = {name :person.name, place: person.place, time: person.time, _id: person._id};
			console.log($scope.form);
			$scope.hideSubmit = true;
		}
		
		$scope.editCandidate = function(form){
			console.log(form);
			$http.put('/editCandidate', form).success(function(data){
				$scope.candidates = data;
				$scope.redakciya = false;
				$scope.hideSubmit = false;
			});
		}
		
		$scope.logOut = function(){
			$scope.adminLoggedIn = false;
			$http.post('/logOut').success(function(data){
				console.log(data);
			});
		}
	
		
		$scope.adminLogin =function(admin){
			var login = admin.name;
			var password = admin.password; 
			$scope.admin = {};

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

