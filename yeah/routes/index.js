var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/index', function(req, res, next) {
  res.render('index', { title: 'EdgarRivera - Inicio' });
});

/* GET pagina2. */
router.get('/pagina2', function(req, res, next) {
  res.render('pagina2', { title: 'EdgarRivera - Mis Proyectos' });
});

/* GET pagina3. */
router.get('/pagina3', function(req, res, next) {
  res.render('pagina3', { title: 'EdgarRivera - Mis Ideas' });
});

/* GET pagina4. */
router.get('/pagina4', function(req, res, next) {
  res.render('pagina4', { title: 'EdgarRivera - Contacto' });
});

module.exports = router;
