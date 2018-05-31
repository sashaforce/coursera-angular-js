(function() {
  'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

ItemsController.$inject = ['items'];
function ItemsController(items) {
  var ctrl = this;

  console.log("items: ", items);
  ctrl.categoryName = items.data.category.name;
  ctrl.items = items.data.menu_items;
  console.log("ctrl.items: ", ctrl.items);

}

}());
