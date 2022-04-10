import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const ShipMent = () => {
    const [email, setEmail]=useState('')
    const [name, setName]=useState('')
    const [address, setAddress]=useState('')
    const [phone, setPhone]=useState('')
    const [error, setError]=useState('')
    // const navigate = useNavigate()


    const handleNameblur=event=>{
        setName(event.target.value)
    }
    const handleEmailblur=event=>{
        setEmail(event.target.value)
    }
    const handleAddressdBlur=event=>{
        setAddress(event.target.value)
    }
    const handlePhoneBlur=event=>{
        setPhone(event.target.value)
    }
 
    const handleCreateUser=event=>{
        event.preventDefault()

      
    }

    return (
        <div className='form-container'>
        <div>
        <h2 className='form-title'>Shipping info</h2>
           <form onSubmit={handleCreateUser}>
                 <div className="input-group">
                     <label htmlFor="name">Name</label>
                     <input onBlur={handleNameblur} type="text" name="name" id="" required/>
                 </div>
                 <div className="input-group">
                     <label htmlFor="email">Email</label>
                     <input onBlur={handleEmailblur} type="email" name="email" id="" required/>
                 </div>
                 <div className="input-group">
                     <label htmlFor="address">Address</label>
                     <input onBlur={handleAddressdBlur} type="text" name="address" id="" required/>
                 </div>
                 <div className="input-group">
                     <label htmlFor="phone">Phone</label>
                     <input onBlur={handlePhoneBlur} type="text" name="phone" id="" required/>
                 </div>
                 

                 <input className='submit-btn' type="submit" value="Add shipping" />
           </form>
           
            
        </div>
     </div>
    );
};

export default ShipMent;