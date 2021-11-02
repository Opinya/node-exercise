var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('render an html page with a list of items');
});

router.put('/:id', function(req, res, next) {
  res.send('Update the model of the corresponding item');
});

router.delete('/:id', function(req, res, next) {
  res.send('Update the model of the corresponding item with the item’s status');
});

module.exports = router;
