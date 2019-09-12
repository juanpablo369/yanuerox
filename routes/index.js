var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Yanua Bar&Discoteca' });
});
router.get('/galeria', function(req, res, next) {
  res.render('galeria', { title: 'Yanua - Galería' });
});
router.get('/cocteles', function(req, res, next) {
  res.render('cocteles', { title: 'Yanua Bar&Discoteca' });
});

router.get('/videos', function(req, res, next) {
  res.render('videos', { title: 'Yanua Bar&Discoteca' });
});

module.exports = router;
