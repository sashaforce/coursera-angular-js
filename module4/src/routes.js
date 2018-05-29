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
    templateUrl: 'src/menuapp/templates/home.template.html'
  })

  .state('categories', {
    url: '/categories',
    templateUrl: 'src/menuapp/templates/categories.template.html',
    //controller: 'CategoryListController as categoryList'//,
    // resolve: {
    //   categories: ['MenuDataService', function(MenuDataService) {
    //     return MenuDataService.getAllCategories();
    //   }]
    // }
  });

}

}());
