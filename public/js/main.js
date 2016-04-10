angular.module('Soshace', ['ngAnimate'])
	.controller('mainCtrl', function($scope, $http){
	
		function showAlert(message){
			document.getElementById("alert").innerHTML=message;
			$scope.alertMessage = true;
			setTimeout(function(){
						$scope.alertMessage = false;
						$scope.$apply();
					}, 2000);
		}
		
		function updateTable(data){
			setTimeout(function(){
				$scope.candidates = data;
			}, 500);
		}
	
		$http.get('/getData').success(function(data){
			$scope.candidates = data.data;
			if(data.auth === "nikita"){
				$scope.adminLoggedIn = true;
				
			}			
		});	
		
		$scope.deleteCandidate = function(id){
			$http.delete('/deleteCandidate/' + id).success(function(data){
				showAlert("Выбранный кандидат удален из таблицы!");
				updateTable(data);	
			});	
		}
		
		$scope.newCandidate = function(form){
			if(angular.isDefined(form.name)){
				$http.post('/newCandidate', form).success(function(data){
				showAlert("Новый кандидат добавлен в таблицу");
				updateTable(data);	
				});
			
			}
			
		}
		
		$scope.cancelIditing= function(){
			$scope.redakciya = false;
			$scope.form = {};
			$scope.hideSubmit = false;
			showAlert("Редактирование отменено");
		}
		
		$scope.editCandidateInForm = function(person){
			$scope.redakciya = true;
			$scope.form = {name :person.name, place: person.place, time: person.time, _id: person._id};
			$scope.hideSubmit = true;
		}
		
		$scope.editCandidate = function(form){
			
			$http.put('/editCandidate', form).success(function(data){
				$scope.candidates = data;
				$scope.redakciya = false;
				$scope.hideSubmit = false;
				showAlert("Редактирование кандидата завершено");
			});
		}
		
		$scope.logOut = function(){
			$scope.adminLoggedIn = false;
			$http.post('/logOut').success(function(data){
			});
		}
	
		
		$scope.adminLogin =function(admin){
			var login = admin.name;
			var password = admin.password; 
			$scope.admin = {};

			$http.post('/login', {"login":login, "password":password}).success(function(data){
				if(data === "ok"){
					$scope.adminLoggedIn = true;
					showAlert('Доброе пожаловать, Никита');
					
				} else{
					$scope.adminLoggedIn = false;
					showAlert('Неверный пароль');
				}
			});
		};
	});

