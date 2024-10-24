const express = require("express");
const router  = express.Router();
const Category = require("../categories/Category")
const Article = require("./Article");
const slugify  = require("slugify");

router.get('/admin/articles', (req, res) => {
    Article.findAll({
        include:[{model:Category}] // Join
    }).then(articles =>{

        res.render('admin/articles/index',{articles:articles})

      })
});

router.get('/admin/articles/new',  (req, res) => {
  Category.findAll().then(categories =>{

    res.render('admin/articles/new',{categories:categories})

  })
})


router.post('/admin/articles/create', function (req, res) {

    var title = req.body.title;
    var articleBody = req.body.articleBody;
    var categoryId = req.body.categoryId;

    if(title != undefined && title != "" && articleBody != undefined && articleBody != "" && categoryId != "0"){

        Article.create({
            title: title,
            body:  articleBody,
            slug:  slugify(title),
            categoryId: categoryId

        }).then(()=>{
            res.redirect("/admin/articles");
        });

    }else{
        res.redirect("/admin/articles/new");
    }

});

router.post('/admin/articles/update', function(req, res) {
    let id  = req.body.id;
    let newTitle = req.body.title;
    let newBody = req.body.body;
    let newCategoryId = req.body.categoryId

    if(id != undefined && !isNaN(id)){
      Article.update({title:newTitle, slug: slugify(newTitle), body:newBody, categoryId:newCategoryId},{
        where:{
          id:id
        }
      }).then(()=>{
        res.redirect("/admin/articles");
      })
    }else{
      res.redirect("/admin/articles");
    }
});

router.get('/admin/articles/edit/:id', function(req, res) {
    const id  = req.params.id;
    Category.findAll().then(categories =>{

        Article.findByPk(id,{include:[{model:Category}]}).then(article=>{

        if(article != undefined && article != "" && !isNaN(id)){

            res.render("admin/articles/edit",{article:article,categories:categories})

        }else{
            res.redirect("/admin/articles")
        }

        });
    })
});


router.post('/admin/articles/delete',(req,res) =>{

    const articleId = req.body.id;

    if(articleId != undefined && !isNaN(articleId)){

        Article.destroy({
            where:{
               id: articleId
        }
        }).then(()=>{
            res.redirect('/admin/articles');
        })
    }else{
        res.redirect('/');
    }

})
module.exports = router;