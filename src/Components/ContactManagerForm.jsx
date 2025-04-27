
import './CSS/ContactManagerForm.css';

import { useState } from "react";
import React from 'react';


function ContactManagerForm(props){

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    //const[contactManger, setContactManger] = useState([]);


    const addManagerSubmit = (e) => {

        const newManager = {
            username,
            email
        };

        //setContactManger([...ConatctMangerForm, newManager]);
        props.addManager(newManager);
        
        setUsername("");
        setEmail("");
    }
    

    

    return (

        <div>
            <h2>Contact Manager App</h2>

            <form onSubmit={addManagerSubmit}>
                <input 
                    type = "text"
                    placeholder='Name'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <input 
                    type = "text"
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />


                <button type ="submit">Add Contact</button> 
                    
                    </form>

        </div>
    );
}

export default ContactManagerForm;
