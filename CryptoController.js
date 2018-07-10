angular.module("app", []).controller("CryptoController", function($scope, $http) {
    $http.get('https://jsonplaceholder.typicode.com/users').
    	then(function(response) {
        	$scope.cryptoData = response.data;
    });
} )