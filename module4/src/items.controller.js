(function() {
  'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

ItemsController.$inject = ['categories'];
function ItemsController(categories) {
  var ctrl = this;

  console.log("categories: ", categories);

}

}());
