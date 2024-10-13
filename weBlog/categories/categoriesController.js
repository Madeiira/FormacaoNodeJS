const express  = require("express");
const router   = express.Router();
const Category = require("./Category");
const slugify  = require("slugify");


router.get('/categories', (req, res) => {
  res.send('Route categories')
});


//ROTAS DE ACESSO APENAS PARA ADMINS

router.get('/admin/categories', function (req, res) {
  Category.findAll( {raw: true, order:[['id','ASC']]}).then(categories =>{
    
    res.render("admin/categories/index",{categories:categories})

  })
});

router.get('/admin/categories/new', function (req, res) {
  res.render("admin/categories/new")
});

//PADRÃO API RESTful
router.post('/admin/categories/create', function (req, res) {

  var title = req.body.title
  if(title != undefined && title != ""){

    Category.create({
      title: title,
      slug:  slugify(title)
    }).then(()=>{
      res.redirect("/admin/categories");
    });

  }else{
    res.redirect("/admin/categories/new");
  }

});


//ROTA PARA EXCLUIR CATEGORIA

router.post('/admin/categories/delete', function(req, res) {
  const id  = req.body.id;
  if(id != undefined && !isNaN(id)){
    Category.destroy({
      where:{
        id:id
      }
    }).then(()=>{
      res.redirect("/admin/categories");
    })
  }else{
    res.redirect("/admin/categories");
  }
});

module.exports = router;