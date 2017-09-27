var repository = {
    getByTeamId: getByTeamId,
    add: add,
    delete: deleteServer
};

var connectionProvider = require('../utils/MongoConnectionProvider'),
    assert = require('assert'),
    Promise = require('promise');

function getByTeamId(teamId) {
    return new Promise(function (resolve, reject) {
        try {
            connectionProvider.getConnection(function (db) {
                var collection = db.collection('servers');
                collection.find({TeamId: teamId}).toArray(function (err, sessions) {
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

function add(server) {
    return new Promise(function (resolve, reject) {
        try {
            connectionProvider.getConnection(function (db) {
                var collection = db.collection('servers');
                collection.insert(server, function (err, result) {
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

function deleteServer(serverId) {
    return new Promise(function (resolve, reject) {
        try {
            connectionProvider.getConnection(function (db) {
                var collection = db.collection('servers');
                collection.delete({_id: serverId}, function (err, result) {
                    if(err){
                        reject(err);
                    }
                    resolve(true);
                });
            });
        } catch (e) {
            reject(e);
        }
    });
}
module.exports = repository;