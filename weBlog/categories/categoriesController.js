const express = require("express");
const router  = express.Router();

router.get('/categories', (req, res) => {
  res.send('Route categories')
});

router.post('/admin/categories/new', function (req, res) {
  res.send('POST create new categories')
})

module.exports = router;