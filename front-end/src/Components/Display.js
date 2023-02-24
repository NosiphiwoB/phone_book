import React from "react";
import Navbar from "./Navbar";
import Table from 'react-bootstrap/Table';
// import Button from "react-bootstrap/esm/Button";


const Display = (props) =>{
    const {list, deleteContact, editContact} = props
    return(
        <div id="display">
            <Navbar/>


            <Table striped bordered hover className="table">
      <thead>
        <tr>
          <th id="initials"></th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone Number</th>
        </tr>
      </thead>
      <tbody id="list" >{list.map((item) => {
            return(
                

              
                <tr key={item._id} >

<div  className="initial"
                    style={{
                      backgroundColor:
                        "rgb(" +
                        Math.round(Math.random() * 255) +
                        "," +
                        Math.round(Math.random() * 255) +
                        "," +
                        Math.round(Math.random() * 255) +
                        ")",
                    }}
                  >
                    {item.contact_name[0]}
                  </div>
                  
                    <td >{item.contact_name}</td>
                     
                    <td>{item.contact_email}</td>
                    <td>{item.contact_number}</td>
                    <button type="submit" value="edit" id="edit" onClick={() =>editContact(item._id)}>Edit</button>
                    <button type="submit" value="delete" id="delete" onClick={()=>deleteContact(item._id)}>Delete</button>
                </tr>
            )
        })}</tbody>     
    </Table>

        </div>
    )

}

export default Display