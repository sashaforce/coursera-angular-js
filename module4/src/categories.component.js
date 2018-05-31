(function() {
  'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/templates/categoryList.template.html',
  bindings: {
    categories: '<'
  }
});

}());
