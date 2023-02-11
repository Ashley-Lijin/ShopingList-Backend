const express = require('express')
const shopingList = require('./routes/shopingList')
const Mongoose = require('mongoose')
const { default: mongoose } = require('mongoose')

require('dotenv').config()


const Env = process.env

// express app
const app = express()

// middle ware
app.use(express.json())

app.use('/shopinglist',shopingList)



// routes
app.get('/', (req, res) => {
    res.json({msg: "Hello guys what' up !!!"})
})

// database
mongoose.set('strictQuery', true)
mongoose.connect(Env.MONGO_URI)
    .then(() => {
        // listen for request
        app.listen(Env.PORT,() => {
            console.log(`Connected to database`);

            console.log(`listening on port ${Env.PORT}`);
        })
    })
    .catch((error) => {
        console.log(error)
    })




process.env