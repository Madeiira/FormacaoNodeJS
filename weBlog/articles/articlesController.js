const express = require("express");
const router  = express.Router();

router.get('/articles', (req, res) => {
  res.send('Route Articles')
});

router.post('/admin/articles/new', function (req, res) {
  res.send('POST create new articles')
})

module.exports = router;