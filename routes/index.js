var express = require('express');
var router = express.Router();
var flash = require('connect-flash');
var publicacionController = require('../controller/publicacionC');
var publicacion = new publicacionController();

router.post('/coments', publicacion.guardar);
router.get('/coments/:external', publicacion.verPublicacion);
router.get('/coments',publicacion.visualizar);


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Yanua Bar&Discoteca', sesion: false });
});
router.get('/galeria', function(req, res, next) {
  res.render('galeria', { title: 'Yanua - Galería', sesion: false });
});
router.get('/cocteles', function(req, res, next) {
  res.render('cocteles', { title: 'Yanua - Bebidas', sesion: false });
});
router.get('/coments', function(req, res, next) {
  res.render('coments', { title: 'Yanua - Posts', sesion: false });
});

router.get('/videos', function(req, res, next) {
  res.render('videos', { title: 'Yanua Bar&Discoteca', sesion: false });
});

module.exports = router;
