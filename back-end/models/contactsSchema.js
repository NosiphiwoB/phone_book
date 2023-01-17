const mongoose = require('mongoose');


const contactsSchema =  mongoose.Schema({

      contact_number: {
         type : Number,
         require: true
      },

      contact_name: {
        type: String,
        require: true
      },

      contact_email: {
        type: String,
        require:true
      }

})

module.exports = mongoose.model("",contactsSchema)