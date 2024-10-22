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

router.get('/admin/articles/new', function (req, res) {
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
        res.redirect("/articles");
      });

    }else{
      res.redirect("/admin/articles/new");
    }

  });

module.exports = router;