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

//ROTA PARA ATUALIZAR CATEGORIA

router.post('/admin/categories/update', function(req, res) {
  let id  = req.body.id;
  let newTitle = req.body.title;
  let newSlug  = slugify(newTitle)

  if(id != undefined && !isNaN(id)){
    Category.update({title:newTitle, slug: newSlug},{
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


//ROTA PARA LISTAR CATEGORIA A SER ATUALIZADA

router.get('/admin/categories/edit/:id', function(req, res) {
  const id  = req.params.id;

  Category.findByPk(id).then(category=>{

    if(category != undefined && category != "" && !isNaN(id)){
      
      res.render("admin/categories/edit",{category:category})

    }else{
      res.redirect("/admin/categories")
    }

  });

});

module.exports = router;