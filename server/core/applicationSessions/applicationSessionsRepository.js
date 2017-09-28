var repository = {
    getByUserId: getByUserId,
    add: add
};

var connectionProvider = require('../utils/MongoConnectionProvider'),
    assert = require('assert'),
    Promise = require('promise'),
    mongo = require('mongodb');

function getByUserId(userId) {
    return new Promise(function (resolve, reject) {
        try {
            connectionProvider.getConnection(function (db) {
                var collection = db.collection('applicationSessions');
                collection.find({UserId: new mongo.ObjectID(userId)}).toArray(function (err, sessions) {
                    if (err) {
                        reject(err);
                        return;
                    }
                    resolve(sessions);
                    db.close();
                });
            }, true);
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