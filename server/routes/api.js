var express = require('express');
var router = express.Router();
var Cabin = require('../models/cabin.js');


// ** GET ALL Cabins ** //
router.get('/cabins', function (req, res, next) {
    Cabin.findQ()
        .then(function(result){res.json(result)})
        .fail(function(err){res.send(err)})
        .done();
});


// ** GET SINGLE Cabin ** //
router.get('/cabin/:id', function (req, res, next) {
    Cabin.findByIdQ(req.params.id)
        .then(function(result){res.json(result)})
        .fail(function(err){res.send(err)})
        .done();
});


// ** POST ALL Cabins ** //
router.post('/cabins', function (req, res, next) {

  new Cabin ( {
        town: req.body.town,
        sleeps: req.body.sleeps,
        availFeb: req.body.availFeb
 })

    .saveQ()
        .then(function(result){res.json(result)})
        .fail(function(err){res.send(err)})
        .done();

});

// ** PUT SINGLE Cabin ** //
router.put('/cabin/:id', function (req, res, next) {
    Cabin.findByIdAndUpdateQ(req.params.id, req.body)
        .then(function(result){res.json(result)})
        .fail(function(err){res.send(err)})
        .done();
});


// ** DELETE SINGLE Cabin ** //
router.delete('/cabin/:id', function (req, res, next) {
    Cabin.findByIdAndRemoveQ(req.params.id)
        .then(function(result){res.json(result)})
        .fail(function(err){res.send(err)})
        .done();
});





module.exports = router;


