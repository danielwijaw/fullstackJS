const express = require('express')
const router = express.Router()

const articles = require("../controllers/articlesController")

router.get('/', articles.index)
router.get('/:id', articles.row)
router.post('/', articles.store)
router.delete('/:id', articles.destroy)
router.put('/:id', articles.update)

module.exports = router
