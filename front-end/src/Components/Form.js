import Navbar from "./Navbar";

const Form = (props) => {
  const {handleChange, handleSubmit, contact_number, contact_name, contact_email} = props;
    return(
        <div>
            <Navbar/>

       <div>
        <h1>Add Contact</h1>        
       </div>

       <form id="form" onSubmit={handleSubmit}>

         <div>
          <label>Contact Number</label>
          <input 
           onChange={handleChange}
           name="contact_number"
           value={contact_number}
          />
         </div>

        <div>
          <label>Contact Name</label>
          <input 
          onChange={handleChange}
          name="contact_name"
          value={contact_name}
          />
        </div>

        <div>
         <label>Contact Email</label>
         <input 
         onChange={handleChange}
         name="contact_email"
         value={contact_email}
         />
        </div>

        <div>
         <button type="submit">Save</button>
        </div>



       </form>


        </div>
        
        
    )
}

export default Form