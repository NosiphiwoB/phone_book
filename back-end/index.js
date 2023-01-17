const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const port = process.env.PORT
const URI = process.env.DATA_BASE
const mongoose = require('mongoose')
const { saveContacts } = require('./routes/contactsRoutes')


app.use(express.json())
app.use(express.urlencoded({extended: "false"}))
app.use(cors())
mongoose.connect(
    URI,{
      useNewUrlParser: true, 
      useUnifiedTopology: true,
    }
  ).then(res => console.log('("Connected")')).catch(err => console.log(err))
  console.log("URI",URI)
  mongoose.set('strictQuery', true)
  saveContacts(app)


app.listen(port, () => console.log(`App listening`))