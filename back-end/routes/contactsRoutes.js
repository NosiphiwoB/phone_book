const contactsSchema = require('../models/contactsSchema')
const postSchema = require('../models/contactsSchema')

const saveContacts = (app) => {
  
    app.post('/save_contact' , async (req, res) => {
        let {contact_number , contact_name , contact_email} = req.body

    try{
        let post = new contactsSchema ({
            contact_number , contact_name , contact_email
        })
        const contactSaved = await post.save()
         
        res.send({massage:"Succesfully saved", contactSaved})
    }catch (error) {
        console.error("post error", error)
        res.send({massage:"post error"}).status(404)
    }

    })

    app.get('/get_contacts' , async (req, res) => {
        try {
            const findContacts = await contactsSchema.find()
            res.send(findContacts)
        }catch(error) {
            console.log('error', error)
        }
    })

    app.delete('/delete_contact/:id' , async (req , res)  =>  {
        try{
            const {id} = req.params  
            const deleteContact = await contactsSchema.deleteOne({_id : id})
            res.send({message: "Deleted", deleteContact})
        }catch(err){
            console.log(err);
            res.sendStatus(501)
        }
    })
app.put('/update_contact/:id', async (req, res) =>{

    const {id} = req.params
    const contact = req.body

    try {
        const contacts = await contactsSchema.findByIdAndUpdate({_id : id , contact} );
        res.status(200).send({message: `Updated` , data : contact})  
    } catch (error) {

        console.log(error)
        res.status(501)
        
    }

})


}



module.exports = {saveContacts}