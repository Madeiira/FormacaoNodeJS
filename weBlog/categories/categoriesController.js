const express  = require("express");
const router   = express.Router();
const Category = require("./Category");
const slugify   = require("slugify");


router.get('/categories', (req, res) => {
  res.send('Route categories')
});


//ROTAS DE ACESSO APENAS PARA ADMINS

router.get('/admin/categories/new', function (req, res) {
  res.render("admin/categories/New")
});

//PADRÃO API RESTful
router.post('/admin/categories/create', function (req, res) {

  var title = req.body.title
  if(title != undefined && title != ""){

    Category.create({
      title: title,
      slug:  slugify(title)
    }).then(()=>{
      res.redirect("/")
    });

  }else{
    res.redirect("/admin/categories/new");
  }

});

module.exports = router;