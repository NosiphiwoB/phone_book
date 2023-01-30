import Navbar from "./Navbar";

const Form = (props) => {
  const {handleChange, handleSubmit, contact_number, contact_name, contact_email} = props;
    return(
        <div>
            <Navbar/>

       <div>
        <h1>Add Contact</h1>        
       </div>

       <form onSubmit={handleSubmit}>
        <div id="form">
         <div>
          <label>Contact Number</label>
          <input className="input"
          placeholder="Your Number"
           onChange={handleChange}
           name="contact_number"
           value={contact_number}
          />
         </div>

        <div>
          <label>Contact Name</label>
          <input className="input"
          placeholder="Your Name"
          onChange={handleChange}
          name="contact_name"
          value={contact_name}
          />
        </div>

        <div>
         <label>Contact Email</label>
         <input className="input"
         placeholder="Your Email"
         onChange={handleChange}
         name="contact_email"
         value={contact_email}
         />
        </div>
        </div>
       <div >
         <button type="submit" id="save">Save Details</button>
        </div>
        <div>
          <button id="cancel">cancel</button>
        </div>

        
       </form>



        </div>
        
        
    )
}

export default Form