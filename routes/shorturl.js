const { Router } = require('express');
const dns = require('dns');
const {
  createShortURL,
  getURLfromShortURL,
} = require('../controllers/shorturl');

const router = Router();

router.post('/shorturl', createShortURL);

router.get('/shorturl/:short_url', getURLfromShortURL);

module.exports = router;
