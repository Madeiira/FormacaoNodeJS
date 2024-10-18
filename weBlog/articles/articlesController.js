const express = require("express");
const router  = express.Router();
const category = require("../categories/Category")

router.get('/articles', (req, res) => {
  res.send('Route Articles')
});

router.get('/admin/articles/new', function (req, res) {
  category.findAll().then(categories =>{

    res.render('admin/articles/new',{categories:categories})

  })
})

module.exports = router;