var todo = angular.module('todoApp', []);

todo.controller('todoController' , function ($scope){
	$scope.hover = true;
	//test compatibility
	if (typeof(Storage) !== "undefined") {
		console.log("Support localStorage");
	} else {
		console.log("Don't support localStorage");
	}
	//Initialize todo list from localStorage
	$scope.saved = localStorage.getItem('todos');
	$scope.todos = $scope.saved !== null ? JSON.parse($scope.saved) : [
	//{'title':'test new item', 'done':false, 'editing':false} 
	];
	//clear completed
	$scope.todos = getUncompleteItems($scope.todos);
	localStorage.setItem('todos', angular.toJson($scope.todos));
	//Initialize completed tasks number
	$scope.completeNumber = 0;
	if($scope.todos){
		for(var i = 0; i < $scope.todos.length; i++){
			if(!$scope.todos[i].done){
				$scope.completeNumber++;
			}
		}
	}
	
	$scope.addItem = function(){
		$scope.completeNumber++;
		$scope.todos.push({'title':$scope.newItem, 'done':false, 'editing':false});
		$scope.newItem = "";
		localStorage.setItem('todos', angular.toJson($scope.todos));
	};
	$scope.remove = function($index){ 
		var obj = $scope.todos[$index];
		if(!obj.done){
			$scope.completeNumber--;
		}
		$scope.todos.splice($index,1);
		localStorage.setItem('todos', angular.toJson($scope.todos));	
	};
	$scope.complete = function($index){
		var obj = $scope.todos[$index];
		if(obj.done){
			$scope.completeNumber++;
			obj.done = false;
		}
		else{
			$scope.completeNumber--;
			obj.done = true;
		}
		localStorage.setItem('todos', angular.toJson($scope.todos));
	};
	$scope.clearComplete = function(){
		$scope.todos = getUncompleteItems($scope.todos);
		localStorage.setItem('todos', angular.toJson($scope.todos));
	};
	$scope.editTodo = function(obj){
		obj.editing = obj.editing?false:true;
		if(!obj.editing){
			localStorage.setItem('todos', angular.toJson($scope.todos));
		}
	};
	function getUncompleteItems(obj){
		var newObj = [];
		for(var i = 0; i < obj.length; i++){
			if(!obj[i].done){
				newObj.push(obj[i]);
			}
		}
		return newObj;
	}
	function getCompleteItems(obj){
		var newObj = [];
		for(var i = 0; i < obj.length; i++){
			if(obj[i].done){
				newObj.push(obj[i]);
			}
		}
		return newObj;
	}
});