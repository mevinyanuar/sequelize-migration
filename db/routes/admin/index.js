const express = require("express")
const router = express.Router()

const{getAdmin, addAdmin} =require('./controller')

router.get('/', getAdmin)
router.post('/', addAdmin)

module.exports = router