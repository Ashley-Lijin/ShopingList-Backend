const mongoose = require('mongoose')
const Schema = mongoose.Schema

const shoplistSchema = new Schema({
    title : {
        type: String,
        require: true
    },
    quantity : {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Shoplist',shoplistSchema)