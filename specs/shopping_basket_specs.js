var assert = require("assert");
var ShoppingBasket = require("../shopping_basket.js");
var Item = require("../item.js");

describe("Shopping Basket", function(){

  it("Holds multiple items",function(){
    var item1 = new Item("Bread", 50);
    var item2 = new Item("Ham", 25);
    var shopping_basket = new ShoppingBasket();
    assert.equal(0, shopping_basket.getSizeOfBasket());
    shopping_basket.add(item1);
    shopping_basket.add(item2);
    assert.equal(2, shopping_basket.getSizeOfBasket());
  });

  it("Can remove items",function(){
    var item1 = new Item("Bread", 50);
    var item2 = new Item("Ham", 25);
    var shopping_basket = new ShoppingBasket();
    shopping_basket.add(item1);
    shopping_basket.add(item2);
    shopping_basket.remove(item1);
    assert.equal(1, shopping_basket.getSizeOfBasket());
  });

  it("Can total cost",function(){
    var item1 = new Item("Bread", 50);
    var item2 = new Item("Ham", 25);
    var shopping_basket = new ShoppingBasket();
    shopping_basket.add(item1);
    shopping_basket.add(item2);
    assert.equal(75, shopping_basket.getBasketPrice());
  });

  it("Can 10% discount",function(){
    var item1 = new Item("Champagne", 3000);
    var shopping_basket = new ShoppingBasket();
    shopping_basket.add(item1);
    assert.equal(2700, shopping_basket.getBasketPrice());
  });

  it("Can card discount",function(){
    var item1 = new Item("Champagne", 3000);
    var shopping_basket = new ShoppingBasket(true);
    shopping_basket.add(item1);
    assert.equal(2565, shopping_basket.getBasketPrice());
  });

  it("Can bogof discount",function(){
    var item1 = new Item("Ham", 200, true);
    var shopping_basket = new ShoppingBasket();
    shopping_basket.add(item1);
    shopping_basket.add(item1);
    assert.equal(200, shopping_basket.getBasketPrice());
  });
});
