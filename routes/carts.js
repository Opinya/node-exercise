var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  res.send('Generate a new cart in active status and return it');
});

router.put('/:id', function(req, res, next) {
    res.send('change the cart status to filled, generate a new cart and set it as working cart');
});

module.exports = router;
