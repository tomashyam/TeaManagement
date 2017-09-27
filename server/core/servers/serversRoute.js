const express = require('express');
const router = express.Router();
const ServersRepository =require('./serversRepository');

router.get('/:teamId', function(req, res, next) {
    ServersRepository.getByTeamId(req.params.teamId)
        .then(function (users) {
            res.send(users);
        });
});

router.post('/add', function(req, res, next) {
    ServersRepository.add(req.body).then(function onSuccess(id) {
        res.send(id);
    }, function onError(err) {
        res.status(500).error(err);
    });
});

router.get('/delete/:serverId', function(req, res, next) {
    ServersRepository.delete(req.params.serverId).then(function onSuccess() {
        res.send(true);
    }, function onError(err) {
        res.status(500).error(err);
    });
});

module.exports = router;