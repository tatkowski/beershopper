(function() {
     'use strict';
var app = angular.module('beershopper', [
  'ngRoute',
  'beershopper.search'
]);
    
app.config(function ($routeProvider) {
 
  $routeProvider
    .when('/search', {
      controller: 'SearchController as vm',
      templateUrl: 'search/search.html'
    })
    .otherwise({
      redirectTo: '/search'
    });
});
})();