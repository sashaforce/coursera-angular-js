(function() {
  'use strict';

angular.module('MenuData')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http'];
function MenuDataService($http) {
  var service = this;
  console.log("MenuDataService");

  service.getAllCategories = function () {
    console.log("getAllCategories");

    return $http({
      method: 'GET',
      url: 'https://davids-restaurant.herokuapp.com/categories.json'
    });
  }

  service.getItemsForCategory = function (catShortName) {
    console.log("getItemsForCategory");

    var url = "https://davids-restaurant.herokuapp.com/menu_items.json?category=" + catShortName;

    return $http({
      method: 'GET',
      url: url
    });
  }

}

}());
