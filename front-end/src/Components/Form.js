import Navbar from "./Navbar";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



const form = (props) => {
  const {handleChange, handleSubmit, contact_number, contact_name, contact_email} = props;
    return(
        <div>
            <Navbar/>

       <div>
        <h1>Add Contact</h1>        
       </div>


       <Form onSubmit={handleSubmit} id='form' >
        <div>
      <Form.Group className="mb-3" controlId="formBasicName">
        <div>
        <Form.Label className="label" id="name">First Name</Form.Label>
        </div>
        <div>
        <Form.Control type="text" placeholder="Enter Your Name" onChange={handleChange}
          name="contact_name"
          value={contact_name} className="input"/>
          </div>
      </Form.Group>
       </div>
       <br/>
       <div>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <div>
        <Form.Label className="label" id="email">Email </Form.Label>
        </div>
        <div>
        <Form.Control type="email" placeholder="Enter Your Email" onChange={handleChange}
         name="contact_email"
         value={contact_email} className="input" required/>
         </div>
      </Form.Group>
       </div>
       <br/>
        <div>
      <Form.Group className="mb-3" controlId="formBasicNumber">
        <div>
        <Form.Label className="label">Phone Number</Form.Label>
        </div>
        <div>
        <Form.Control type="number" placeholder="0765863889" onChange={handleChange}
           name="contact_number"
           value={contact_number}  className="input" id="number" required/>
           </div>
      </Form.Group>
        </div>

<br/>

<div>
  <div>

        <Button variant="flat" type="submit" className="save">
        Save Details
      </Button>
  </div>
<br/>
  <div>

      <Button variant="primary" type="submit" className="cancel">
        Cancel
      </Button>
  </div>
</div>


    </Form>



       </div>
        
        
    )
}

export default form