var express = require('express');
var router = express.Router();
var repository = require('./applicationSessionsRepository');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/getByUserId/:userId', function(req, res, next) {
    repository.getByUserId(req.params.userId)
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

module.exports = router;