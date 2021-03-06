const connectionProvider = require('../utils/MongoConnectionProvider');
const assert = require('assert');
var mongo = require('mongodb');

var ServersRepository = {
    getByTeamId: getByTeamId,
    add: add,
    deleteServer: deleteServer
};

    function getByTeamId(teamId) {
        return new Promise(function (resolve, reject) {
            try {
                connectionProvider.getConnection(function(db) {
                    var collection = db.collection('servers');
                    collection.find({TeamId: new mongo.ObjectID(teamId)}).toArray(function(err, servers) {
                        if (err) {
                            reject(err);
                        }
                        resolve(servers);
                    })
                })
            } catch (e) {
                reject(e);
            }
        });
    }

    function add(server) {
        return new Promise(function (resolve, reject) {
            try {
                connectionProvider.getConnection(function(db) {
                    var collection = db.collection('servers');
                    collection.insert(server, function(err, result) {
                        if (err) {
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
                        if (err) {
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

module.exports = ServersRepository;











