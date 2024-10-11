const express = require("express");
const router  = express.Router();

router.get('/categories', (req, res) => {
  res.send('Route categories')
});

router.get('/admin/categories/new', function (req, res) {
  res.render("admin/categories/New")
})

module.exports = router;