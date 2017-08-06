var express = require('express');
var http = require('http');
var router = express.Router();

router.get('/:name', function(req, res, next) {
  res.render('./pie', { title: req.params.name });
});

module.exports = router