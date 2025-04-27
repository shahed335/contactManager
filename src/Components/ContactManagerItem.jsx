
import './CSS/ConatctMangerForm';
import { useState } from "react";

function ConatctMangerItem(){

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
   // const[contactManger, setContactManger] = useState([]);

    

    return (

        <div>
            <h2>Contact Manger App</h2>

            <form onSubmit={addPersonSubmit}>
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

export default ConatctMangerItem;
