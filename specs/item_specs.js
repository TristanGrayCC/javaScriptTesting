var assert = require("assert");
var Item = require("../item.js");

describe("Item", function(){

  it("Has attributes",function(){
    var item = new Item("Bread", 50);
    assert.equal("Bread", item.name);
    assert.equal(50, item.price);
    assert.equal(false, item.bogof);
  });
});
