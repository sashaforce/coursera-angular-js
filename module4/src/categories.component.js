(function() {
  'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/menuapp/templates/categoryList.template.html',
  // no controller needed - no special behaviour (?)
  bindings: {
    items: '<'
  }
});

}());
