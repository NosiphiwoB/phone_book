import Form from './Form';
import axios from 'axios';
import { useNavigate, Routes, Route } from 'react-router-dom'
import Display from './Display';
import { useEffect, useState } from 'react';

const Main = () => {
   let navigate = useNavigate()
   const [form, setForm] = useState({
    contact_number:"",
    contact_name:"",
    contact_email:""
   })

   const [list, setList] = useState([]);
   useEffect(() => {
    getDetails();
   }, []);

   const handleChange = (e) => {
    setForm({
      ...form,
       [e.target.name]:e.target.value,
    });
   };

   const handleSubmit = async (e) => {
   e.preventDefault();
   if(form.contact_number === "" || form.contact_name === "" || form.contact_email === "" ) {
    return  alert ("Fill all the inputs")
   }else{
    try{
      const saveContacts = await axios.post(
        "http://localhost:5000/save_contact",
          form,
      );
      getDetails();
      navigate('/display')
      setForm({
        contact_number: "",
        contact_name: "",
        contact_email: ""
            })
      return saveContacts;
      
    } catch (error) {
      console.log("error", error);
    }
  }
    
  };
  const getDetails = async () => {
    await axios
      .get("http://localhost:5000/get_contacts")
      .then((response) => {
        const data = response.data;
        setList(data);
      })
      .catch(() => {
      });
    };

    const deleteContact = async (id) => {
      console.log('id', id)
      let res = await axios.delete(`http://localhost:5000/delete_contact/${id}`);
      getDetails();
      return res.data
     }  

     const editContact = async (id) => {
      console.log('id', id)
      let res = await axios.edit(`http://localhost:5000/update_contact/${id}`);
      getDetails();
      return res.data
     }

  return (

    <div>
      <Routes>
        <Route path="/" exact  element={<Form handleChange={handleChange} handleSubmit={handleSubmit}/>}/>
        <Route path="/display" element={<Display list={list} getDetails={getDetails} deleteContact={deleteContact} editContact={editContact}/>} />
      </Routes>
    </div>

  );
}

export default Main;
