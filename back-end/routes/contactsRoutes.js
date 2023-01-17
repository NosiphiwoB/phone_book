const contactsSchema = require('../models/contactsSchema');


const saveContacts = (app) => {

   app.post('./contact' , async(req,res) => {
        
   });



   app.get('./contacts' , async(req,res) => {

   })


   app.put('./contact' , async(req,res) => {

   })


   app.delete('./contact/:id' , async(req,res) => {

   })

}

module.exports = {saveContacts}