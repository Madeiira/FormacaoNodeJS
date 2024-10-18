import { Router } from 'express'
import { findAll } from '../categories/Category'
const router = Router()

router.get('/articles', (req, res) => {
  res.send('Route Articles')
})

router.get('/admin/articles/new', function (req, res) {
  findAll().then((categories) => {
    res.render('admin/articles/new', { categories })
  })
})

export default router
