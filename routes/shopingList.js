const express = require('express')
const shoplist = require('../Model/Shoping_List')
const router = express.Router()
const { createShoplist,
        getAll,
        getSingle,
        deleteShoplist,
        updateShoplist, } = require('../controller/shopingLisstController')

// Get shopling list
router.get('/', getAll)

// Get a shopling list
router.get('/:id',getSingle)

// add shoping list

router.post('/post', createShoplist )

// delete somethin on shoping list
router.delete('/:id',deleteShoplist)

// delete somethin on shoping list
router.patch('/update/:id',updateShoplist)

module.exports = router