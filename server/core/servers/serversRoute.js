var express = require('express');
var router = express.Router();
var repository = require('./serversRepository');

router.get('/:teamId', function(req, res, next) {
    repository.getByTeamId(req.params.teamId)
        .then(function (users) {
            res.send(users);
        });
});

router.post('/add', function(req, res, next) {
    repository.add(req.body).then(function onSuccess(id) {
        res.send(id);
    }, function onError(err) {
        res.status(500).error(err);
    });
});

router.get('/delete/:serverId', function(req, res, next) {
    repository.delete(req.params.serverId).then(function onSuccess() {
        res.send(true);
    }, function onError(err) {
        res.status(500).error(err);
    });
});

module.exports = router;