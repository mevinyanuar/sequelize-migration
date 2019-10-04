const express = require('express')
const router = express.Router()

const {getBlog, addBlog} = require ('./controller')

router.get('/', getBlog)
router.post('/', addBlog)

module.exports = router