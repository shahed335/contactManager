import ContactManagerItem from "./ContactManagerItem";
import './CSS/ContactManagerList.css';

function ContactManagerList(props){
    return(

        <div>
            <h2>Contact List</h2>

            {props.ContactManager.length === 0 ? (
                <p>No contacts available.</p>
            ) : (
            <ul>
                {props.ContactManager.map((Contact, index) => ( 
                    <ContactManagerItem 
                        key = {index}
                        username={Contact.username}
                        email={Contact.email}
                
                />)
                )}
            </ul>
            )}
        </div>

    )

}

export default ContactManagerList;
