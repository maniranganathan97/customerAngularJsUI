var app = angular.module("myShoppingList", []);
app.controller("myCtrl", function($scope) {
    $scope.products = ["Milk", "Bread", "Cheese"];

    $scope.addNewItem = function () {
        $scope.errorText = "";
        if(!$scope.newProductName) {
            alert("Please add product name and try to add...");
            return;
        }
        console.log("new product name is --->"+ $scope.newProductName);
        if($scope.products.indexOf($scope.newProductName) != -1) {
            $scope.errorText = "This Product is already available, please add new one!";
        } else {
            $scope.products.push($scope.newProductName);
        }

        $scope.newProductName= "";
    };

    $scope.removeItem = function (index) {
        $scope.errorText = "";
        $scope.products.splice(index, 1);
    }
});
