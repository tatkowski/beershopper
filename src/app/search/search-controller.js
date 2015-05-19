(function () {
angular
  .module('beershopper.search')
  .controller('SearchController', searchCtrl);
   
searchCtrl.$inject = ['$http'];

function searchCtrl($http) {
    var vm = this;
    
    vm.searchTerm = '';
    vm.searchResults = [];
    
    vm.search = search;
        
    function search() {
        // search url http://systembevakningsagenten.se/api/json/1.0/searchProduct.json?query=sigtuna
        $http.get('http://systembevakningsagenten.se/api/json/1.0/searchProduct.json?query=' + vm.searchTerm)
        .success(function(data) {
            vm.searchResults = data.items;
        });
    }
}

})();