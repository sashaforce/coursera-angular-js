(function() {
  'use strict';

  angular.module("ShoppingListCheckOff", []) // name, requires
  .controller("ToBuyController", ToBuyController)
  .controller("AlreadyBoughtController", AlreadyBoughtController)
  .service("ShoppingListCheckOffService", ShoppingListCheckOffService);

  ToBuyController.$inject = ["ShoppingListCheckOffService"];

  function ToBuyController (ShoppingListCheckOffService) {
      var list = this;

      list.items = ShoppingListCheckOffService.toBuyList;

      list.buyItem = function (index) {
        ShoppingListCheckOffService.buyItem(index);
      }
  }; // ToBuyController

  AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];

  function AlreadyBoughtController (ShoppingListCheckOffService) {
      var list = this;

      list.items = ShoppingListCheckOffService.boughtList;
  }; // AlreadyBoughtController

  function ShoppingListCheckOffService() {

    var service = this;

    service.toBuyList = [
      { name: "cookies", quantity: 10 },
      { name: "candy", quantity: 5 },
      { name: "soda", quantity: 12 },
      { name: "Pepto Bismol", quantity: 3 },
      { name: "skipping rope", quantity: 1 }
    ];

    service.boughtList = [];

    service.buyItem = function (index) {
      var item = service.toBuyList.splice(index, 1)[0];
      //console.log(item);
      service.boughtList.push(item);
    }

  } // ShoppingListCheckOffService

}());
