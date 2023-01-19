import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    
    return (
        <div>
         <nav>
           <button><Link to='/' id="add-contact">Add Contact</Link></button>
           <button><Link to='/display'>Contact List</Link></button>

         </nav>

        </div>
    )
}

export default Navbar