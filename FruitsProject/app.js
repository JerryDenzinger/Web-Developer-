const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

//Connection URL
const url = 'mongodb://localhost:27017';

// Database Name 
const dbName = 'fruitsDB';

// Create a new MongoClient
const client = new MongoClient(url, { useUnifiedTopology: true });

// Use connect method to connect to the Server 
client.connect(function (err) {
    assert.strictEqual(null, err);
    console.log("Connected succesfully to server");

    const db = client.db(dbName);

    // insertDocuments(db, function () {
    //   client.close;
    //});
    findDocuments(db, function () {
        client.close;
    });
});

const insertDocuments = function (db, callback) {
    // Get Fruits collection 
    const collection = db.collection('fruits');
    // Insert some documents 
    collection.insertMany([
        {
            name: "Apple",
            score: 8,
            review: "Great fruit"
        },
        {
            name: "Orange",
            score: 6,
            review: "Kind of sour"
        },
        {
            name: "Banana",
            score: 9,
            review: "Great stuff!!"
        }
    ], function (err, result) {
        assert.strictEqual(err, null);
        assert.strictEqual(3, result.result.n);
        assert.strictEqual(3, result.ops.length);
        console.log("Inserted 3 documents into the collection");
        callback(result);
    });

};

const findDocuments = function (db, callback) {
    // Get Fruits collection 
    const collection = db.collection('fruits');
    // find some documents 
    collection.find({}).toArray(function (err, fruits) {
        assert.strictEqual(err, null);
        console.log("Found the following records");
        console.log(fruits);
        callback(fruits);
    })
};


