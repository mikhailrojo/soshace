angular.module('Soshace', [])
	.controller('mainCtrl', function($scope, $http){
		$scope.candidates =[ 
			{
			name: "Никита Брагин",
			time: "12-00",
			place: "Офис"
			},
			{
			name: "Павел Брагин",
			time: "19-00",
			place: "Офис"
			},
			{
			name: "Денис Нефедорв",
			time: "13-00",
			place: "Скайп"
			},
			 {
			name: "Марк Губарев",
			time: "12-00",
			place: "Скайп"
			},
		];
		
		$scope.submitData = function(){
			alert('Данные получены');
		}
		
		$scope.adminLogin =function(admin){
			alert(admin.password);
			$scope.adminLoggedIn =true;
		};
	});
