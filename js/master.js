var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope){
    $scope.items = [];
    $scope.edit = false;
    $scope.new = false;
    $scope.addItem = function(name, quantity, price){
        if(!name || !quantity || !price){
            return;
        }else{
            var item = {name: name, quantity: quantity, price: price};
            $scope.items.push(item);
        }
    };
    
    $scope.toggleEdit = function(index){
        $scope.index = index;
        $scope.name =  $scope.items[index].name;
        $scope.quantity =  $scope.items[index].quantity;
        $scope.price =  $scope.items[index].price;
        $scope.edit = !$scope.edit;
        $scope.new = false;
    };
    
    $scope.editItem = function(index, name, quantity, price){
        if(!name || !quantity || !price){
            return;
        }else{
            $scope.items[index].name = name;
            $scope.items[index].quantity = quantity;
            $scope.items[index].price = price;
        }
    };
    
    $scope.toggleNew = function(){
        $scope.name = "";
        $scope.quantity = "";
        $scope.price = "";
        $scope.new = !$scope.new;
        $scope.edit = false;
    };
    
    $scope.removeItem = function(index){
        $scope.items.splice(index, 1);
    };
    
    $scope.total = function(){
        var total = 0;
        for(var i = 0; i < $scope.items.length; i++){
            total += $scope.items[i].quantity * $scope.items[i].price;
        }
        return total;
    };
});