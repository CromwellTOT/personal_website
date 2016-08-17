var myApp = angular.module("myApp", []);

myApp.controller("ctrl", function($scope){
	//initialization
	$scope.person = [
		{fName: 'Frank', lName: "Zhang", editing: false},
		{fName: 'you', lName: "Zhao", editing: false}
	];
	
	$scope.first = 1;
	$scope.second = 1;
	
	$scope.update = function(){
		console.log(typeof $scope.first);
		$scope.cal = $scope.first + " + " + $scope.second + " = " + (parseInt($scope.first) + parseInt($scope.second))
	}
	
	$scope.editTodo = function(obj){
		obj.editing = obj.editing?false:true;
	}
});