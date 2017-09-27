/**
 * Created by hack on 27/09/2017.
 */

var teamsRepository = {
    getAllTeams: getAllTeams,
    addTeam: addTeam,
    deleteTeam: deleteTeam
};

const connectionProvider = require('../utils/MongoConnectionProvider'),
    Promise = require('promise');
const collectionName = "teams";

    function getAllTeams (){
        return new Promise((resolve, reject)=> {
            connectionProvider.getConnection(db => {
                const collection = db.collection(collectionName);
                collection.find().toArray((err, teams)=> {
                    if (err) {
                        reject(error);
                    }
                    resolve(teams);
                })
            })
        });
    };

    function addTeam (team) {
        return new Promise ((resolve,reject)=> {
            connectionProvider.getConnection((db)=> {
                const collection = db.collection(collectionName);
                collection.insert(team, (err, result) =>{
                    if (err) {
                        reject(err);
                    }
                    resolve(result.insertedIds[0].toString());
                });
            });
        });
    };

    function deleteTeam(teamId) {
        return new Promise ((resolve,reject)=> {
            connectionProvider.getConnection((db)=> {
                const collection = db.collection(collectionName);
                collection.delete({_id: teamId}, (err, result) =>{
                    if (err) {
                        reject(err);
                    }
                    resolve(result.insertedIds[0].toString());
                });
            });
        });
     };
module.exports = teamsRepository;