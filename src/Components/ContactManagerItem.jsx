import './CSS/ContactManagerForm.css';

function ContactManagerItem({manager, key}){

    return (

        <li key = {key}>
            <strong>{manager.username}</strong> - Email: {manager.email}
        </li>
    );
}

export default ContactManagerItem;
