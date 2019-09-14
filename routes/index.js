var express = require('express');
var router = express.Router();
var publicacionController = require('../controller/publicacionC');
var publicacion = new publicacionController();

router.post('/publicar', publicacion.guardar);
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Yanua Bar&Discoteca' });
});
router.get('/galeria', function(req, res, next) {
  res.render('galeria', { title: 'Yanua - Galería' });
});
router.get('/cocteles', function(req, res, next) {
  res.render('cocteles', { title: 'Yanua - Bebidas' });
});

router.get('/videos', function(req, res, next) {
  res.render('videos', { title: 'Yanua Bar&Discoteca' });
});

module.exports = router;
