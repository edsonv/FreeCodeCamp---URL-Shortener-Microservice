const { Router } = require('express');

const router = Router();

router.post('/', (req, res, next) => {
  console.log(req.body);
});

router.get('/', (req, res) => {
  console.log('GET', req);
});

module.exports = router;
