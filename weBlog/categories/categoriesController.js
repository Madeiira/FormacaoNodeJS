import { Router } from 'express'
import { findAll, create, destroy, update, findByPk } from './Category'
import slugify from 'slugify'
const router = Router()

router.get('/categories', (req, res) => {
  res.send('Route categories')
})

// ROTAS DE ACESSO APENAS PARA ADMINS

router.get('/admin/categories', function (req, res) {
  findAll({ raw: true, order: [['id', 'ASC']] }).then((categories) => {
    res.render('admin/categories/index', { categories })
  })
})

router.get('/admin/categories/new', function (req, res) {
  res.render('admin/categories/new')
})

// PADRÃO API RESTful
router.post('/admin/categories/create', function (req, res) {
  const title = req.body.title
  if (title != undefined && title != '') {
    create({
      title,
      slug: slugify(title),
    }).then(() => {
      res.redirect('/admin/categories')
    })
  } else {
    res.redirect('/admin/categories/new')
  }
})

// ROTA PARA EXCLUIR CATEGORIA

router.post('/admin/categories/delete', function (req, res) {
  const id = req.body.id
  if (id != undefined && !isNaN(id)) {
    destroy({
      where: {
        id,
      },
    }).then(() => {
      res.redirect('/admin/categories')
    })
  } else {
    res.redirect('/admin/categories')
  }
})

// ROTA PARA ATUALIZAR CATEGORIA

router.post('/admin/categories/update', function (req, res) {
  const id = req.body.id
  const newTitle = req.body.title

  if (id != undefined && !isNaN(id)) {
    update(
      { title: newTitle, slug: slugify(newTitle) },
      {
        where: {
          id,
        },
      },
    ).then(() => {
      res.redirect('/admin/categories')
    })
  } else {
    res.redirect('/admin/categories')
  }
})

// ROTA PARA LISTAR CATEGORIA A SER ATUALIZADA

router.get('/admin/categories/edit/:id', function (req, res) {
  const id = req.params.id

  findByPk(id).then((category) => {
    if (category != undefined && category != '' && !isNaN(id)) {
      res.render('admin/categories/edit', { category })
    } else {
      res.redirect('/admin/categories')
    }
  })
})

export default router
