var ShoppingBasket = function(discountCard = false){
  this.basket = [];
  this.discountCard = discountCard;
}

ShoppingBasket.prototype ={
  add: function(item){
    this.basket.push(item);
  },

  getSizeOfBasket: function(){
    return this.basket.length;
  },

  remove: function(item){
    var index = this.basket.indexOf(item);
    this.basket.splice(index, 1);
  },

  bogofDiscount: function(item){
    if (item.bogof){
      var occurances = this.basket.filter(function(val){
        return val.name === item.name;
      }).length;
      var bogofValue = occurances/2;
      var value = Math.floor(bogofValue);
      var subtract = value*item.price;
      return subtract;
    } else {
      return 0;
    }
  },
  included: function(lookingItem, items) {
    for(var item of items) {
      if(item.name === lookingItem.name ) {
        return true;
      }
    }
    console.log(lookingItem);
    return false;
  },

  getBasketPrice: function(){
    var totalPrice = 0;
    var uniqItems = [];
    for (item of this.basket){
      totalPrice += item.price;
      if (!this.included(item, uniqItems)){
        uniqItems.push(item);
      };
    }
    for (uniqItem of uniqItems){
      totalPrice -= this.bogofDiscount(uniqItem);
    };
    if (totalPrice > 2000) {
      totalPrice = totalPrice*0.9;
    }
    if (this.discountCard) {
      totalPrice = totalPrice*0.95;
    }
    return totalPrice;
  }

}

module.exports = ShoppingBasket;
