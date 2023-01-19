import React from "react";
import Navbar from "./Navbar";

const Display = (props) =>{
    const {list, deleteContact, editContact} = props
    return(
        <div>
            <Navbar/>

        <div id="list" >{list.map((item) => {
            return(
                <tr key={item._id} >
                    <td >{item.contact_number}</td>
                    <td>{item.contact_name}</td>
                    <td>{item.contact_email}</td>
                    <button type="submit" value="edit" id="edit" onClick={() =>editContact(item._id)}>E</button>
                    <button type="submit" value="delete" id="delete" onClick={()=>deleteContact(item._id)}>X</button>
                </tr>
            )
        })}</div>    
        </div>
    )

}

export default Display