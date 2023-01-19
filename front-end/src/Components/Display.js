import React from "react";
import Navbar from "./Navbar";

const Display = (props) =>{
    const {list, deleteContact, editContact} = props
    return(
        <div>
            <Navbar/>

        <div id="cards" >{list.map((item) => {
            return(
                <ul key={item._id} className="card">
                    <li >{item.contact_number}</li>
                    <li>{item.contact_name}</li>
                    <li>{item.contact_email}</li>
                    <button type="submit" value="edit" id="edit" onClick={() =>editContact(item._id)}>E</button>
                    <button type="submit" value="delete" id="delete" onClick={()=>deleteContact(item._id)}>X</button>
                </ul>
            )
        })}</div>    
        </div>
    )

}

export default Display