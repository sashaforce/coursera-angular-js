(function() {
  'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'src/templates/itemList.template.html',
  bindings: {
    items: '<'
  }
});

}());
