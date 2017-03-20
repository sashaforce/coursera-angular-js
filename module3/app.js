(function() {
  'use strict';

  angular.module("NarrowItDownApp", []) // name, requires
  .controller("NarrowItDownController", NarrowItDownController)
  .service("MenuSearchService", MenuSearchService)
  .directive("foundItems", FoundItemsDirective);

  function FoundItemsDirective () {
    var ddo = {
        scope: {
          foundItems: "<",
          //onRemove: "&"
        },
        templateUrl: "foundItems.html",
        restrict: "E",
        controller: FoundItemsDirectiveController,
        controllerAs: "list",
        bindToController: true
    }
    return ddo;
  }

  function FoundItemsDirectiveController () {
    var list = this;

  }

  NarrowItDownController.$inject = ["MenuSearchService"];
  function NarrowItDownController (MenuSearchService) {
    var ctrl = this;

    ctrl.narrowItDown = function (searchTerm) {
      console.log("narrowItDown(" + searchTerm + ")");
      MenuSearchService.getMatchedMenuItems(searchTerm)
      .then(function(result){
        console.log("then result: " + result)
        ctrl.found = result;
      })
      .catch(function (error){
        console.log("ERROR - UNABLE TO RETRIEVE DATA FROM SERVER. Error: " + error);
      })
    }
  };

  MenuSearchService.$inject = ["$http"];
  function MenuSearchService ($http) {
    var service = this;

    service.getMatchedMenuItems = function (searchTerm) {
      console.log("getMatchedMenuItems(" + searchTerm + ")");
      return $http({
          method: "GET",
          url:"https://davids-restaurant.herokuapp.com/menu_items.json"
      }).then(function (result) {
        console.log(result);
        // process result and only keep items that match
        var foundItems = [];
        for (var i = 0; i < result.data.menu_items.length; i++) {
          if (result.data.menu_items[i].description.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
            //console.log("Found: " + foundItems[i].description);
            //filteredItems.push(foundItems[i]);
            foundItems.push(result.data.menu_items[i]);
          }
        }
        // return processed items
        console.log("foundItems" + foundItems);
        return foundItems;
      });
    }
  }

}());
