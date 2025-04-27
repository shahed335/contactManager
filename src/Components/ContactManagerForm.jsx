
import './CSS/ConatctMangerForm';

import { useState } from "react";
import React from 'react';


function ConatctMangerForm(props){

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    //const[contactManger, setContactManger] = useState([]);


    const addManagerSubmit = (e) => {

        const newManger = {
            username,
            email
        };

        //setContactManger([...ConatctMangerForm, newManager]);
        props.addManager(newManger);
        
        setUsername("");
        setEmail("");
    }
    

    

    return (

        <div>
            <h2>Contact Manger App</h2>

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
                    onChange={(e) => setemaill(e.target.value)}
                />


                <button type ="submit">Add Contact</button> 
                    
                    </form>

        </div>
    );
}

export default ConatctMangerForm;
