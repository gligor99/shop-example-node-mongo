const mongodb = require("mongodb");
const getDb = require("../util/database").getDb;

class CartItem {
  constructor(productId, quantity) {
    this.productId = new mongodb.ObjectId(productId);
    this.quantity = quantity;
  }
}

module.exports = CartItem;
