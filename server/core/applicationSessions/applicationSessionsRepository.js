var repository = {
    getByUserId: getByUserId,
    add: add
};

var connectionProvider = require('../utils/MongoConnectionProvider'),
    assert = require('assert'),
    Promise = require('promise');

function getByUserId(userId) {
    return new Promise(function (resolve, reject) {
        try {
            connectionProvider.getConnection(function (db) {
                var collection = db.collection('applicationSessions');
                collection.find({UserId: userId}).toArray(function (err, sessions) {
                    if (err) {
                        reject(err);
                    }
                    resolve(sessions);
                });
            });
        } catch (e) {
            reject(e);
        }
    });
}

function add(applicationSession) {
    return new Promise(function (resolve, reject) {
        try {
            connectionProvider.getConnection(function (db) {
                var collection = db.collection('applicationSessions');
                collection.insert(applicationSession, function (err, result) {
                    if(err){
                        reject(err);
                    }
                    resolve(result.insertedIds[0].toString());
                });
            });
        } catch (e) {
            reject(e);
        }
    });
}

module.exports = repository;