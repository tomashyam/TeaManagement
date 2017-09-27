var connectionProvider = {
    getConnection: getConnection
};

var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');

var url = 'mongodb://localhost:27017/teaManagement';

function getConnection(callback) {
    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        callback(db);
        db.close();
    });
}
module.exports = connectionProvider;