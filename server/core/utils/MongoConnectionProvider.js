const MongoClient  = require("mongodb").MongoClient;

const  assert = require('assert');

const connectionProvider = {
    getConnection : getConnection
}

const url = 'mongodb://ws66:27017/teaManagement';

function getConnection (callback, keepOpen)  {
        MongoClient.connect(url, function(err, db) {
            assert.equal(null, err);
            callback(db);
            if (!keepOpen) {
                db.close();
            }
        });

}

module.exports = connectionProvider;



