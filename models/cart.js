const mongodb = require("mongodb");
const getDb = require("../util/database").getDb;

class Cart {
  constructor(id) {
    this._id = id ? new mongodb.ObjectId(id) : null;
    this.items = [];
  }

  save() {
    const db = getDb();
    return db.collection("carts").insertOne(this);
  }

  static findById(cartId) {
    const db = getDb();
    return db
      .collection("carts")
      .findOne({ _id: new mongodb.ObjectId(cartId) });
  }
}

module.exports = Cart;
