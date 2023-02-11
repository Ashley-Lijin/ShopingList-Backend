const shoplist = require('../Model/Shoping_List')
const mongoose = require('mongoose')

// get all
const getAll = async (req, res) => {
    const shopList = await shoplist .find({}).sort({createdAt: -1})
    res.status(200).json(shopList)
}

// get single
const getSingle = async (req, res) => {

    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: "no such shoplist"})
    }
    
    const shopList = await shoplist.findById(id)

    if (!shopList){
        return res.status(404).json({error: "no such shoplist"})
    }

    res.status(200).json(shopList)
}

// create

const createShoplist = async (req, res) =>{

    const {title, quantity} = req.body

    try{
        const shopList = await shoplist.create({title,quantity})
        res.status(200).json(shopList)

    } catch (error){
        res.status(400).json({error: error.message})
    }
}

//delete

const deleteShoplist = async (req,res) => {

    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: "no such shoplist"})
    }
    
    const shopList = await shoplist.findOneAndDelete({_id: id})

    if (!shopList){
        return res.status(404).json({error: "no such shoplist"})
    }

    res.status(200).json(shopList)
}

//update

const updateShoplist = async (req,res) => {

    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: "no such shoplist"})
    }
    
    const shopList = await shoplist.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!shopList){
        return res.status(404).json({error: "no such shoplist"})
    }

    res.status(200).json(shopList)
}


//export

module.exports = {
    createShoplist,
    getAll,
    getSingle,
    deleteShoplist,
    updateShoplist
}