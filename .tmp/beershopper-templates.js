(function(module) {
try {
  module = angular.module('beershopper');
} catch (e) {
  module = angular.module('beershopper', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/beershopper/search/search.html',
    '<h3>Find beers at Systemet</h3>\n' +
    '\n' +
    '  <form ng-submit="vm.search()">\n' +
    '      <input type="text" placeholder="Type to search" ng-model="vm.searchTerm"/>\n' +
    '      <button type="submit" ng-click="vm.submit()">Add</button>\n' +
    '    </form>\n' +
    '\n' +
    '<ul class="search-results">\n' +
    '  <li class="todo-item" ng-repeat="todo in vm.searchResults">\n' +
    '    <label>{{todo.name}}</label>\n' +
    '  </li>\n' +
    '</ul>\n' +
    '');
}]);
})();
