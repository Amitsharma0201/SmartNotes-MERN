require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const userRouter = require('./routes/userRouter')
const noteRouter = require('./routes/noteRouter')

const app = express()
app.use(express.json())
app.use(cors())

//Routes
app.use('/users', userRouter)
app.use('/api/notes', noteRouter)


//Listen server
const PORT = process.env.PORT
app.listen(PORT, ()=> {
    console.log('server is running on port', PORT)
})

//Connect to MONGODB
const URI = process.env.MONGODB_URL
mongoose.connect(URI, {
    // mongoose.set('useCreateIndex', true);
    // mongoose.set('useFindAndModify', false);
    // mongoose.set('useNewUrlParser', true);
    // mongoose.set('useUnifiedTopology', true);
}, err =>{
    if(err) throw err;
    console.log('Connected to MongoDB')
})