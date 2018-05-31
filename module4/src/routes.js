(function() {
  'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

//RoutesConfig.$inject = ['MenuDataService', '$stateProvider', '$urlRouterProvider'];
RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
//function RoutesConfig(MenuDataService, $stateProvider, $urlRouterProvider) {
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/templates/home.template.html'
  })

  .state('categories', {
    url: '/categories',
    templateUrl: 'src/templates/categories.template.html',
    controller: 'CategoriesController as ctrl',
    resolve: {
      categories: ['MenuDataService', function(MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('categories.items', {
    url: '/items/{catShortName}',
    templateUrl: 'src/templates/items.template.html',
    controller: 'ItemsController as ctrl',
    resolve: {
      items: ['MenuDataService', '$stateParams', function(MenuDataService, $stateParams) {
        // how do we get access to categoryShortName here???
        // A: is passed in as a param!!! Duh. Use $stateParams service.
        return MenuDataService.getItemsForCategory($stateParams.catShortName);
      }]
    }
  });

}

}());
