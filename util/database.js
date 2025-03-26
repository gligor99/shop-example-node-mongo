const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://luka:R8ZtBqTrigcMoXS2@cluster0.okn97bk.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0"
  )
    .then((client) => {
      // console.log("Connected to MongoDB", client);
      _db = client.db();
      callback(client);
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) return _db;
  throw "No database found!";
};

module.exports = {
  mongoConnect: mongoConnect,
  getDb: getDb,
};
